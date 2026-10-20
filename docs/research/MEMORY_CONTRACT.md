# Contrato recuperado de memória e Dream Agent

## Proveniência e cobertura

Esta análise estática usa `GrokBotResearch/sand/sand-host/host-main.cjs` (SHA-256 `d9dcf2550d6e033fc752852dffc044d34622edfbe9a7421476199761c0ce0946`) e `agent-isolation/agent-store-worker.cjs` (SHA-256 `e7d54d24d6ce6e82fb0c1b76d7572dbbb51b9437f958f04e6057b59e673a80fb`). A inspeção inicial foi complementada por recortes de origem exatos analisados pelo REA nesta passagem. O host completo continua fora do orçamento do analisador; cada Evidence abaixo cobre apenas os recortes indicados. Os deslocamentos indicam módulos compilados no host, não TypeScript-fonte original nem prova de execução.

### Recortes REA de armazenamento e ferramenta (2026-10-19)

- `host-main.cjs`, SHA acima: recorte `sand-data-files` 453707-453792, formato de fatos 702731-702839, `FileMemoryStore` 702840-702999, e montagem virtual 769524-769685. REA Evidence `ev_7b223a0a9152496214ba9c38279caf572c72dc373159305436ca186aa43d4778`, resumo `ev_767e4a51ee5a9de9e016e2d5c13c35bb260a8f331efdce151a93b9c753af6a97`: 4/4 fontes analisadas, 2.842 nós AST, zero falhas de parsing, grafo de aplicação completo dentro do recorte; grafo semântico manteve 666 incógnitas.
- `sand-eval-runner.cjs`, recorte `MemoryFolderView` 629261-629325 e métodos de shard 629755-629842: REA Evidence `ev_9d421f5e9533634bfeff195aeddbe9a213e6d1c5eb0b17ca8fa5a83b5976f81d`, resumo `ev_88f18dfe0e68e432fe695c80d41007de05963abb0b4674a83427e092260ca187`: 2/2 fontes analisadas, 1.031 nós AST, zero falhas de parsing, grafo de aplicação completo dentro do recorte e 247 incógnitas semânticas.
- O primeiro recorte confirma escrita atômica com helpers Sand sem seguir links simbólicos, memória em `memory/profile.md` e `memory/log/YYYY-MM.md`, deduplicação por conteúdo normalizado sem diferenciar caixa, ID SHA-1 de 16 caracteres, limite de 500 caracteres e remoção do fato junto à linha de proveniência. A store é criada sob o diretório do agente quando a sessão é materializada (linhas 721505 e 721561). O segundo recorte confirma que o runner selecionado grava em shards v1 recebidos e recusa escrita em pastas v2_jsonl; a presença de montagens virtuais ou rotas v2 no host não prova que esse runner as fornece.
- Os recortes não provam disponibilidade de todos os escopos, políticas compartilhadas completas, operação runtime, ordem/atomicidade no backend remoto, nem scheduler e entrada do Dream. Não trate o fluxo de Eval Runner como implementação do host regular sem prova de injeção.

## Camadas distintas

| Camada | Evidência no código | O que representa | Limite |
| --- | --- | --- | --- |
| Estado de conversa | `agent-store-worker.cjs`, módulo `conversation-blob-db.ts`; RPCs `set-blob`, `get-blob`, `find-latest-root`, `clear-blobs`, `clear-stale-roots`, `collect-garbage`, `walk-export-closure`, `get-blobs`, `close` | Blobs endereçados por conteúdo com estrutura serializada de conversa, turns e steps | Não é memória semântica do usuário |
| Memória local do agente | `memory-service.ts`, host em torno de 702840-702999 | Arquivos `memory/profile.md` e `memory/log/YYYY-MM.md`; fatos em Markdown, proveniência opcional em comentário HTML e turn ID; escrita segue helpers Sand com gravação atômica e sem seguir symlinks | Implementação do helper estática no recorte; sem execução ou prova de semântica do backend |
| Tipos de memória em shards | `journal.ts`, `profile.ts` (em torno de 702600); `memory-types.ts` (753930+) | `journal` e `profile` do bot, além de variantes compartilhadas pertencentes ao usuário; tipos padrão habilitados incluem profile/journal próprios e compartilhados | Semântica de backend e controle de acesso compartilhado ainda incompletos |
| Pastas virtuais | `virtual-mounts/memory.ts` (769520-769687) | Escopos `/memories/agent`, `/user`, `/user_bot`, `/files`; operações list/read/search e ferramenta `RecallMemory` | Montagem disponível depende das dependências fornecidas ao runner |
| Atualização | `sand-state-tool.ts` (762560 e 771620+); Eval Runner 629755-629842 | `UpdateMemory` recebe `write` ou `forget`, fato exato, tipo e metadados; rota para `deps.state.writeMemory`/`removeMemory`; runner grava em shard v1 provido e esquece pelo conteúdo exato | Política completa dos escopos e implementação do host regular ainda não estão traçadas |
| Prompt | `memory-prompt.ts` (754715+) | Distingue memória própria do bot, memória compartilhada do usuário e notas pessoa-específicas; orienta uso de `UpdateMemory` | `perTurnExtraction` não prova, por si só, quem extrai nem quando grava |
| Dream | `dream-agent.ts` (753953+) e manifest (756923+) | Worker de curadoria com ferramentas para buscar/ler transcrições carregadas, recordar e atualizar memória | Não prova scheduler, carregamento de transcrições ou execução em runtime |

## Regras observadas no código

- O serviço de arquivos limita fatos normalizados a 500 caracteres, remove duplicatas por conteúdo normalizado sem diferenciar caixa e deriva IDs a partir de SHA-1 truncado. Recall de perfil seleciona até 100 itens; o log considera recência com meia-vida de 30 dias e pesos observados para `[episode]` e `[note]`.
- `RecallMemory` é somente leitura, retorna até 20 resultados por padrão, aceita no máximo 50 e limita resposta a 4.000 caracteres. A busca por palavras sobrepostas tem fallback de substring literal sem diferenciar caixa para consultas curtas.
- `UpdateMemory` admite escrita e esquecimento; a instrução de esquecimento exige recuperar primeiro e fornecer o texto exato. O código descreve escrita pela ferramenta sem confirmação adicional, mas a autorização final por escopo deve ser confirmada no roteamento e nas dependências.
- A configuração tipada `notes` existe, porém o catálogo padrão observado habilita profile/journal próprios e compartilhados, não `notes`.
- O prompt de `notes` para o Dream pede fatos que possam importar no futuro, uma nota por fato, evitando conversa trivial, eventos pontuais, duplicatas e fatos obsoletos.
- O Dream declara allowlist de quatro ferramentas: busca/leitura de transcrições carregadas, recall e atualização de memória. Seu contrato consome `host.dream.transcripts`; a origem/seleção dessas transcrições não foi localizada.

## Relação com proatividade e lacunas

Dream é uma rotina de consolidação de memória sobre transcrições que lhe são fornecidas. A evidência não o identifica como iniciador de mensagens ao usuário. A decisão espontânea de iniciar trabalho pertence a uma investigação separada de proatividade; ver [PROACTIVITY_ORIGINAL.md](PROACTIVITY_ORIGINAL.md). Permanecem desconhecidos: iniciador e frequência da rotina Dream, seleção/carregamento de transcrições, provider de inferência efetivamente usado, implementação completa de `writeSandDataFileSync`, decisão de extração automática do perfil, armazenamento compartilhado, validação de escopo/privacidade e recuperação após falha.

Esta especificação serve de base para implementação independente e testes de contrato. Ela não autoriza copiar bundles ou alegar equivalência operacional sem rastrear e validar as lacunas.

## Fatia implementada em TheGrok

TheGrok agora persiste fatos privados por perfil de agente em seu estado JSON local, oferece ferramentas `RecallMemory` e `UpdateMemory` apenas quando um shard privado do agente é injetado, coloca até 100 fatos `profile` e 20 fatos `journal` no contexto e permite inspecionar/adicionar/remover fatos pela aba Library. Escritas e remoções passam por RPC de resposta entre worker e Electron Main; o Main valida o agente do turno e persiste cada mutação antes de continuar a inferência.

Essa implementação reaproveita limites observados (500 caracteres, dedupe case-insensitive, ID SHA-1 truncado, recall até 20 por padrão/50 máximo e teto de 4.000 caracteres) e o ranking de log com meia-vida de 30 dias e pesos dos prefixos `[episode]`/`[note]`. Continua diferente no armazenamento (JSON local em vez de arquivos Markdown por agente), não implementa escopos compartilhados, metadados tipados, pastas virtuais, leitura/escrita v2, extração automática ou Dream. É uma fatia funcional local, ainda sem paridade com a memória distribuída original.
