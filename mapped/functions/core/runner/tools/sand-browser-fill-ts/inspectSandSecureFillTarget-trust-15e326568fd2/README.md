# `inspectSandSecureFillTarget/trust`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/browser-computer/README.md).

**Módulo:** `core/runner/tools/sand-browser-fill.ts` · [README do módulo](../../../../../../modules/core/runner/tools/sand-browser-fill-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:727557-727557](../../../../../../../reference/runtime/host-main.cjs#L727557-L727557) | `ArrowFunctionExpression` | não | `result` |
| [evaluation:562012-562012](../../../../../../../reference/runtime/sand-eval-runner.cjs#L562012-L562012) | `ArrowFunctionExpression` | não | `result` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:727557-727557](../../../../../../../reference/runtime/host-main.cjs#L727557-L727557) | 0 | 0 | 0 | 0 | 0 | 0 |

A ocorrência em host:727557 usa retorno implícito de arrow function.
| [evaluation:562012-562012](../../../../../../../reference/runtime/sand-eval-runner.cjs#L562012-L562012) | 0 | 0 | 0 | 0 | 0 | 0 |

A ocorrência em evaluation:562012 usa retorno implícito de arrow function.

### host:727557

Chamadas escritas diretamente neste corpo: `belt.trustResult`.

SHA-256 do trecho: `badafff62bba638d7e0d1ceb688cf30d5cf6da95484f1653dcc0de2e0b05302d`.

### evaluation:562012

Chamadas escritas diretamente neste corpo: `belt.trustResult`.

SHA-256 do trecho: `badafff62bba638d7e0d1ceb688cf30d5cf6da95484f1653dcc0de2e0b05302d`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
