# `createAutomationSubagentTransport/sendMessageBlockReason`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `core/ports/transport.ts` · [README do módulo](../../../../../modules/core/ports/transport-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:583786-583791](../../../../../../reference/runtime/sand-eval-runner.cjs#L583786-L583791) | `ArrowFunctionExpression` | não | `message, deliverTo` |
| [evaluation:583805-583805](../../../../../../reference/runtime/sand-eval-runner.cjs#L583805-L583805) | `ArrowFunctionExpression` | não | `(nenhum)` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:583786-583791](../../../../../../reference/runtime/sand-eval-runner.cjs#L583786-L583791) | 1 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:583805-583805](../../../../../../reference/runtime/sand-eval-runner.cjs#L583805-L583805) | 0 | 0 | 0 | 0 | 0 | 0 |

A ocorrência em evaluation:583805 usa retorno implícito de arrow function.

### evaluation:583786

Chamadas escritas diretamente neste corpo: `transport.sendMessageBlockReason`.

SHA-256 do trecho: `92742e352b620ac0296081779a30e20712621e16e6fc63b9a9d6a2f46d75e343`.

### evaluation:583805

Chamadas escritas diretamente neste corpo: nenhuma chamada identificável por nome.

SHA-256 do trecho: `fb429b5c1d0eb9764fe038072cda0b19f82332a70b1165588bda794e2682af19`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
