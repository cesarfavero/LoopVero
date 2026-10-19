# Contrato recuperado de memória e Dream Agent

## Proveniência e cobertura

Esta análise estática usa `GrokBotResearch/sand/sand-host/host-main.cjs` (SHA-256 `d9dcf2550d6e033fc752852dffc044d34622edfbe9a7421476199761c0ce0946`) e `agent-isolation/agent-store-worker.cjs` (SHA-256 `e7d54d24d6ce6e82fb0c1b76d7572dbbb51b9437f958f04e6057b59e673a80fb`). A inspeção de origem abaixo foi correlacionada com inventário/Analysis View REA já retidos, mas não houve nova validação semântica REA nesta passagem: a análise abrangente do host excedeu heap, e as seleções existentes são parciais. Os deslocamentos indicam módulos compilados no host, não TypeScript-fonte original nem prova de execução.

## Camadas distintas

| Camada | Evidência no código | O que representa | Limite |
| --- | --- | --- | --- |
| Estado de conversa | `agent-store-worker.cjs`, módulo `conversation-blob-db.ts`; RPCs `set-blob`, `get-blob`, `find-latest-root`, `clear-blobs`, `clear-stale-roots`, `collect-garbage`, `walk-export-closure`, `get-blobs`, `close` | Blobs endereçados por conteúdo com estrutura serializada de conversa, turns e steps | Não é memória semântica do usuário |
| Memória local do agente | `memory-service.ts`, host em torno de 702840-702985 | Arquivos `memory/profile.md` e `memory/log/YYYY-MM.md`; fatos em Markdown, proveniência opcional em comentário HTML e turn ID | `writeSandDataFileSync` ainda precisa de rastreamento para fechar segurança/atomicidade |
| Tipos de memória em shards | `journal.ts`, `profile.ts` (em torno de 702600); `memory-types.ts` (753930+) | `journal` e `profile` do bot, além de variantes compartilhadas pertencentes ao usuário; tipos padrão habilitados incluem profile/journal próprios e compartilhados | Semântica de backend e controle de acesso compartilhado ainda incompletos |
| Pastas virtuais | `virtual-mounts/memory.ts` (769520-769687) | Escopos `/memories/agent`, `/user`, `/user_bot`, `/files`; operações list/read/search e ferramenta `RecallMemory` | Montagem disponível depende das dependências fornecidas ao runner |
| Atualização | `sand-state-tool.ts` (762560 e 771620+) | `UpdateMemory` recebe `write` ou `forget`, fato exato, tipo e metadados; rota para `deps.state.writeMemory`/`removeMemory` | A política completa de escopo e a persistência subjacente ainda precisam ser traçadas |
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
