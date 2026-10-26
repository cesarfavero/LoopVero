# `switchModeRejected`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/architecture/README.md).

**Módulo:** `agent-core/interaction-queries.js` · [README do módulo](../../../../modules/agent-core/interaction-queries-js/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:475658-475673](../../../../../reference/runtime/host-main.cjs#L475658-L475673) | `FunctionExpression` | não | `queryId, reason` |
| [evaluation:254882-254897](../../../../../reference/runtime/sand-eval-runner.cjs#L254882-L254897) | `FunctionExpression` | não | `queryId, reason` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:475658-475673](../../../../../reference/runtime/host-main.cjs#L475658-L475673) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:254882-254897](../../../../../reference/runtime/sand-eval-runner.cjs#L254882-L254897) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:475658

Chamadas escritas diretamente neste corpo: `new InteractionResponse`, `new SwitchModeRequestResponse`, `new SwitchModeRequestResponse_Rejected`.

SHA-256 do trecho: `ee01a2e7de3111944a0b1db505029f1c19e0c39fcc318ebed20ca43dd24140da`.

### evaluation:254882

Chamadas escritas diretamente neste corpo: `new InteractionResponse`, `new SwitchModeRequestResponse`, `new SwitchModeRequestResponse_Rejected`.

SHA-256 do trecho: `ee01a2e7de3111944a0b1db505029f1c19e0c39fcc318ebed20ca43dd24140da`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
