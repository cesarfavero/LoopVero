# `partialToolCall`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/architecture/README.md).

**Módulo:** `agent-core/interaction-updates.js` · [README do módulo](../../../../modules/agent-core/interaction-updates-js/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:475931-475939](../../../../../reference/runtime/host-main.cjs#L475931-L475939) | `FunctionExpression` | não | `callId, toolCall2, modelCallId` |
| [evaluation:255241-255249](../../../../../reference/runtime/sand-eval-runner.cjs#L255241-L255249) | `FunctionExpression` | não | `callId, toolCall2, modelCallId` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:475931-475939](../../../../../reference/runtime/host-main.cjs#L475931-L475939) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:255241-255249](../../../../../reference/runtime/sand-eval-runner.cjs#L255241-L255249) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:475931

Chamadas escritas diretamente neste corpo: `new InteractionUpdate`, `new PartialToolCallUpdate`.

SHA-256 do trecho: `0134ccec432b9429117ab12181d27d7933accd45c31958cb2c9ce92215cbf70d`.

### evaluation:255241

Chamadas escritas diretamente neste corpo: `new InteractionUpdate`, `new PartialToolCallUpdate`.

SHA-256 do trecho: `0134ccec432b9429117ab12181d27d7933accd45c31958cb2c9ce92215cbf70d`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
