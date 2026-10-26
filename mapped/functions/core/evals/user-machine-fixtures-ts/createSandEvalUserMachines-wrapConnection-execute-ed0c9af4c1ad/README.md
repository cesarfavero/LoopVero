# `createSandEvalUserMachines/wrapConnection/execute`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `core/evals/user-machine-fixtures.ts` · [README do módulo](../../../../../modules/core/evals/user-machine-fixtures-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:596524-596524](../../../../../../reference/runtime/sand-eval-runner.cjs#L596524-L596524) | `ArrowFunctionExpression` | não | `ctx, args, options2` |
| [evaluation:596527-596527](../../../../../../reference/runtime/sand-eval-runner.cjs#L596527-L596527) | `ArrowFunctionExpression` | sim | `ctx, args, options2` |
| [evaluation:596530-596530](../../../../../../reference/runtime/sand-eval-runner.cjs#L596530-L596530) | `ArrowFunctionExpression` | sim | `ctx, args, options2` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:596524-596524](../../../../../../reference/runtime/sand-eval-runner.cjs#L596524-L596524) | 0 | 0 | 0 | 0 | 0 | 0 |

A ocorrência em evaluation:596524 usa retorno implícito de arrow function.
| [evaluation:596527-596527](../../../../../../reference/runtime/sand-eval-runner.cjs#L596527-L596527) | 0 | 0 | 1 | 0 | 0 | 0 |

A ocorrência em evaluation:596527 usa retorno implícito de arrow function.
| [evaluation:596530-596530](../../../../../../reference/runtime/sand-eval-runner.cjs#L596530-L596530) | 0 | 0 | 1 | 0 | 0 | 0 |

A ocorrência em evaluation:596530 usa retorno implícito de arrow function.

### evaluation:596524

Chamadas escritas diretamente neste corpo: `.execute`, `.shellStream`, `base.get`, `evalBoxOptions`, `machineFor`.

SHA-256 do trecho: `1020fe64e155d6cf46efe57ddcef1cb8f37563aeb2478a23253893481f67242f`.

### evaluation:596527

Chamadas escritas diretamente neste corpo: `.execute`, `.spawnBackground`, `base.get`, `evalBoxOptions`, `machineFor`.

SHA-256 do trecho: `ae66c6e038fae3afbfb00af4879c91a6d6846b91c06f68c280fa494d0a10247b`.

### evaluation:596530

Chamadas escritas diretamente neste corpo: `.execute`, `.read`, `base.get`, `evalBoxOptions`, `machineFor`.

SHA-256 do trecho: `c205641bc6e4dc678d1bccd60572699a221307e76d70e4259ae9190036e7f219`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
