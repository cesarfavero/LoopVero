# Verified findings

| Achado | Evidência | Consequência para a leitura |
| --- | --- | --- |
| A entrada BOX de envio recusa turnos efetivos | Prompt vazio sem anexos é no-op; o restante encontra a recusa BOX | Não desenhar essa entrada como loop local ativo |
| Agentes temporais passam pelo proxy remoto | Wrapper do gateway e seleção por `agent.harness` | Backend e host são fronteiras diferentes |
| O executor de avaliação contém o loop completo disponível | Factory, runner, shell, sessão e stream ligados | Estudar essa implementação sem atribuir sua configuração à produção |
| WakeParent encerra um executor pai-mediado e devolve um pedido de handoff | Mensagem single-shot e resultado `automationParentWake` | A retomada exige handler do host; o mecanismo não revela seleção inicial nem comprova entrega ao usuário |
| O timer de sincronização de automações não é detector de oportunidades | Reconciliação de exclusões remotas pendentes | Não chamar polling administrativo de proatividade |
| `resumePendingWakes` está vazio no caminho recuperado do host | Retornos literais e trilha BOX aposentada | Não alegar recuperação operacional por presença do nome |
| Automação pai-mediada não é universalmente readonly | Dispatch do executor usa `readonly:false` | Políticas e ferramentas devem ser lidas por tipo e contexto |
| Dream tem tipo e manifesto de ferramentas | Ferramentas de transcript e memória, sem conectores | Isso não comprova agendador noturno ativo |
| RecallMemory possui caminho lexical | Sobreposição de palavras e fallback literal | Não presumir embeddings ou busca vetorial |
| Scheduler watchdog não mata automaticamente a tarefa | Callback e escape permitem tarefa zombie | Marcar timeout de diagnóstico separadamente de cancelamento real |
| Capacidade do worker pool não é teto rígido em todos os estados | Sem candidato a evicção, ensure pode criar worker thread | Não prometer limite estrito de threads apenas por `maxWorkers` |

Fontes e explicações: [turnos](../components/turns/README.md), [gateway](../components/gateway/README.md), [inferência](../components/inference/README.md), [proatividade](../components/proactivity/README.md), [automações](../components/automations/README.md), [wakes](../components/background-wakes/README.md), [memória](../components/memory/README.md), [scheduling](../components/scheduling/README.md), [isolamento](../components/isolation/README.md).

## Fronteiras que permanecem abertas

| Fronteira | O que foi identificado | O que falta para afirmar o comportamento completo |
| --- | --- | --- |
| Seleção espontânea de oportunidades | Marcadores, tipos e mecanismos de execução/entrega | Algoritmo inicial, candidatos, ranking, filtros, frequência e configuração ativa |
| Backend temporal | RPCs, ações, watch e contratos gerados | Implementação do serviço/workflow e implantação |
| Produção e avaliação | Runner e factory concretos no artefato de avaliação | Prova de equivalência de configuração com produção |
| Dream | Tipo, manifesto, prompts e portas | Orquestrador/agendador, população de transcripts e política ativa |
| Disponibilidade das ferramentas | Manifestos, gates e composição | Valores de gates e permissões de uma sessão real |
| Recuperação após falha real | Classes, transições e tratamento estático | Execução controlada com armazenamento e serviços reais |

As lacunas não foram preenchidas com uma reconstrução imaginada. Cada uma delimita o que ainda precisaria de evidência para um guia operacional de produção.
