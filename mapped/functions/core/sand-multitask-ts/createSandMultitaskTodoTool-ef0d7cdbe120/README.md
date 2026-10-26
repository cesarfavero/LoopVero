# `createSandMultitaskTodoTool`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/components/tasks/README.md).

**Módulo:** `core/sand-multitask.ts` · [README do módulo](../../../../modules/core/sand-multitask-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:752234-752246](../../../../../reference/runtime/host-main.cjs#L752234-L752246) | `FunctionDeclaration` | não | `resourceAccessor, stateHandler, reminders` |
| [evaluation:530290-530302](../../../../../reference/runtime/sand-eval-runner.cjs#L530290-L530302) | `FunctionDeclaration` | não | `resourceAccessor, stateHandler, reminders` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:752234-752246](../../../../../reference/runtime/host-main.cjs#L752234-L752246) | 1 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:530290-530302](../../../../../reference/runtime/sand-eval-runner.cjs#L530290-L530302) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:752234

Chamadas escritas diretamente neste corpo: `allowsSystemReminder`, `createUpdateTodosTool`.

SHA-256 do trecho: `9a7ceb141a0df611beaf040943f6b5eb2238348025219b63e813bc68ce045b31`.

### evaluation:530290

Chamadas escritas diretamente neste corpo: `allowsSystemReminder`, `createUpdateTodosTool`.

SHA-256 do trecho: `9a7ceb141a0df611beaf040943f6b5eb2238348025219b63e813bc68ce045b31`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
