# `toolCallDelta`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/architecture/README.md).

**Módulo:** `agent-core/interaction-updates.js` · [README do módulo](../../../../modules/agent-core/interaction-updates-js/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:475870-475882](../../../../../reference/runtime/host-main.cjs#L475870-L475882) | `FunctionExpression` | não | `callId, toolCallDelta, modelCallId, messageStartedAtMs` |
| [evaluation:255180-255192](../../../../../reference/runtime/sand-eval-runner.cjs#L255180-L255192) | `FunctionExpression` | não | `callId, toolCallDelta, modelCallId, messageStartedAtMs` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:475870-475882](../../../../../reference/runtime/host-main.cjs#L475870-L475882) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:255180-255192](../../../../../reference/runtime/sand-eval-runner.cjs#L255180-L255192) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:475870

Chamadas escritas diretamente neste corpo: `new InteractionUpdate`, `new ToolCallDeltaUpdate`.

SHA-256 do trecho: `0581a8f97e1df4c380e19ef750ef04414f626134673ce28cb943f258cea81c87`.

### evaluation:255180

Chamadas escritas diretamente neste corpo: `new InteractionUpdate`, `new ToolCallDeltaUpdate`.

SHA-256 do trecho: `0581a8f97e1df4c380e19ef750ef04414f626134673ce28cb943f258cea81c87`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
