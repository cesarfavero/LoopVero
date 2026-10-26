# `createFileTransferTools/execute`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/sand-file-transfer-tools.ts` · [README do módulo](../../../../../../modules/core/runner/tools/sand-file-transfer-tools-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:777740-777748](../../../../../../../reference/runtime/host-main.cjs#L777740-L777748) | `ArrowFunctionExpression` | não | `ctx, args, deps` |
| [host:777756-777764](../../../../../../../reference/runtime/host-main.cjs#L777756-L777764) | `ArrowFunctionExpression` | não | `ctx, args, deps` |
| [evaluation:577435-577443](../../../../../../../reference/runtime/sand-eval-runner.cjs#L577435-L577443) | `ArrowFunctionExpression` | não | `ctx, args, deps` |
| [evaluation:577451-577459](../../../../../../../reference/runtime/sand-eval-runner.cjs#L577451-L577459) | `ArrowFunctionExpression` | não | `ctx, args, deps` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:777740-777748](../../../../../../../reference/runtime/host-main.cjs#L777740-L777748) | 0 | 0 | 0 | 0 | 0 | 0 |

A ocorrência em host:777740 usa retorno implícito de arrow function.
| [host:777756-777764](../../../../../../../reference/runtime/host-main.cjs#L777756-L777764) | 0 | 0 | 0 | 0 | 0 | 0 |

A ocorrência em host:777756 usa retorno implícito de arrow function.
| [evaluation:577435-577443](../../../../../../../reference/runtime/sand-eval-runner.cjs#L577435-L577443) | 0 | 0 | 0 | 0 | 0 | 0 |

A ocorrência em evaluation:577435 usa retorno implícito de arrow function.
| [evaluation:577451-577459](../../../../../../../reference/runtime/sand-eval-runner.cjs#L577451-L577459) | 0 | 0 | 0 | 0 | 0 | 0 |

A ocorrência em evaluation:577451 usa retorno implícito de arrow function.

### host:777740

Chamadas escritas diretamente neste corpo: `copyFileToBox`, `resolveMachineIdArgument`.

SHA-256 do trecho: `f52432cb50e8c76fa72969686f432cf3e20e8bc219f37d0fe6672aafd5eb161d`.

### host:777756

Chamadas escritas diretamente neste corpo: `copyFileFromBox`, `resolveMachineIdArgument`.

SHA-256 do trecho: `e1b3c8ca0437ddc5d2c634487459ededc58f3cbc2e7ddb5316fe8a812b7836a6`.

### evaluation:577435

Chamadas escritas diretamente neste corpo: `copyFileToBox`, `resolveMachineIdArgument`.

SHA-256 do trecho: `f52432cb50e8c76fa72969686f432cf3e20e8bc219f37d0fe6672aafd5eb161d`.

### evaluation:577451

Chamadas escritas diretamente neste corpo: `copyFileFromBox`, `resolveMachineIdArgument`.

SHA-256 do trecho: `e1b3c8ca0437ddc5d2c634487459ededc58f3cbc2e7ddb5316fe8a812b7836a6`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
