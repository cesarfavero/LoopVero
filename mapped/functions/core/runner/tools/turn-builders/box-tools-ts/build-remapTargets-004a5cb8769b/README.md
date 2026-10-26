# `build/remapTargets`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/turn-builders/box-tools.ts` · [README do módulo](../../../../../../../modules/core/runner/tools/turn-builders/box-tools-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:779147-779147](../../../../../../../../reference/runtime/host-main.cjs#L779147-L779147) | `ArrowFunctionExpression` | não | `args` |
| [evaluation:578881-578881](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L578881-L578881) | `ArrowFunctionExpression` | não | `args` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:779147-779147](../../../../../../../../reference/runtime/host-main.cjs#L779147-L779147) | 0 | 0 | 0 | 0 | 0 | 0 |

A ocorrência em host:779147 usa retorno implícito de arrow function.
| [evaluation:578881-578881](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L578881-L578881) | 0 | 0 | 0 | 0 | 0 | 0 |

A ocorrência em evaluation:578881 usa retorno implícito de arrow function.

### host:779147

Chamadas escritas diretamente neste corpo: `remapTargets.call`.

SHA-256 do trecho: `25fba7ed9d93035ba90e473c80545280cc635ad4efca398ef07f4a2f33bc9457`.

### evaluation:578881

Chamadas escritas diretamente neste corpo: `remapTargets.call`.

SHA-256 do trecho: `25fba7ed9d93035ba90e473c80545280cc635ad4efca398ef07f4a2f33bc9457`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../../guide/methodology/README.md).
