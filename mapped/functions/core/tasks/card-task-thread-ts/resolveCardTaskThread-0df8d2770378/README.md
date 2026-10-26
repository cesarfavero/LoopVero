# `resolveCardTaskThread`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/tasks/README.md).

**Módulo:** `core/tasks/card-task-thread.ts` · [README do módulo](../../../../../modules/core/tasks/card-task-thread-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:725416-725436](../../../../../../reference/runtime/host-main.cjs#L725416-L725436) | `FunctionDeclaration` | sim | `taskId, tasks, withoutTaskId = "to show the card in the main chat"` |
| [evaluation:524673-524693](../../../../../../reference/runtime/sand-eval-runner.cjs#L524673-L524693) | `FunctionDeclaration` | sim | `taskId, tasks, withoutTaskId = "to show the card in the main chat"` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:725416-725436](../../../../../../reference/runtime/host-main.cjs#L725416-L725436) | 5 | 0 | 2 | 2 | 3 | 0 |
| [evaluation:524673-524693](../../../../../../reference/runtime/sand-eval-runner.cjs#L524673-L524693) | 5 | 0 | 2 | 2 | 3 | 0 |

### host:725416

Chamadas escritas diretamente neste corpo: `isSandAgentTaskId`, `new SandToolInputError`, `tasks.prepareThreadSend`, `tasks.read`, `tasks.setDoneThisTurn`.

Alvos de lançamento explícito: `SandToolInputError`.

SHA-256 do trecho: `f4ae5f244085d49e967bb86d9441dc72a7009f8b4e25a8defff08c1e0dc498d7`.

### evaluation:524673

Chamadas escritas diretamente neste corpo: `isSandAgentTaskId`, `new SandToolInputError`, `tasks.prepareThreadSend`, `tasks.read`, `tasks.setDoneThisTurn`.

Alvos de lançamento explícito: `SandToolInputError`.

SHA-256 do trecho: `f4ae5f244085d49e967bb86d9441dc72a7009f8b4e25a8defff08c1e0dc498d7`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
