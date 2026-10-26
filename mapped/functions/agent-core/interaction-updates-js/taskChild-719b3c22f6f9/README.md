# `taskChild`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/architecture/README.md).

**Módulo:** `agent-core/interaction-updates.js` · [README do módulo](../../../../modules/agent-core/interaction-updates-js/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:475911-475921](../../../../../reference/runtime/host-main.cjs#L475911-L475921) | `FunctionExpression` | não | `taskToolCallId, update, modelCallId` |
| [evaluation:255221-255231](../../../../../reference/runtime/sand-eval-runner.cjs#L255221-L255231) | `FunctionExpression` | não | `taskToolCallId, update, modelCallId` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:475911-475921](../../../../../reference/runtime/host-main.cjs#L475911-L475921) | 1 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:255221-255231](../../../../../reference/runtime/sand-eval-runner.cjs#L255221-L255231) | 1 | 0 | 0 | 2 | 0 | 0 |

### host:475911

Chamadas escritas diretamente neste corpo: `Updates.toolCallDelta`, `new TaskToolCallDelta`, `new ToolCallDelta`.

SHA-256 do trecho: `3e0abe6a2c268dcc23f0fd4226056efdb26c641275a5c9d1ca26ff13a492b069`.

### evaluation:255221

Chamadas escritas diretamente neste corpo: `Updates.toolCallDelta`, `new TaskToolCallDelta`, `new ToolCallDelta`.

SHA-256 do trecho: `3e0abe6a2c268dcc23f0fd4226056efdb26c641275a5c9d1ca26ff13a492b069`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
