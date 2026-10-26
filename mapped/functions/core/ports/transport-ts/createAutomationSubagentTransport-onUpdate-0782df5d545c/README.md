# `createAutomationSubagentTransport/onUpdate`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `core/ports/transport.ts` · [README do módulo](../../../../../modules/core/ports/transport-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:583783-583783](../../../../../../reference/runtime/sand-eval-runner.cjs#L583783-L583783) | `ArrowFunctionExpression` | não | `update` |
| [evaluation:583796-583802](../../../../../../reference/runtime/sand-eval-runner.cjs#L583796-L583802) | `ArrowFunctionExpression` | não | `update` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:583783-583783](../../../../../../reference/runtime/sand-eval-runner.cjs#L583783-L583783) | 0 | 0 | 0 | 0 | 0 | 0 |

A ocorrência em evaluation:583783 usa retorno implícito de arrow function.
| [evaluation:583796-583802](../../../../../../reference/runtime/sand-eval-runner.cjs#L583796-L583802) | 2 | 0 | 0 | 1 | 0 | 0 |

### evaluation:583783

Chamadas escritas diretamente neste corpo: `transport.onUpdate`.

SHA-256 do trecho: `49302ae6c715620809efa0e63c1a39492cf76ee4b9b53b61b4a06539e36cb102`.

### evaluation:583796

Chamadas escritas diretamente neste corpo: `isAutomationParentCard`, `transport.onUpdate`.

SHA-256 do trecho: `60b4bfa2699716e4bbefac4c8c1c636444f63c1f2ec82a2e1bcdd854aa46752c`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
