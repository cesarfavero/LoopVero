# `createSandSplitStateTools/execute`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/state-tools/split-tools.ts` · [README do módulo](../../../../../../../modules/core/runner/tools/state-tools/split-tools-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:771968-771971](../../../../../../../../reference/runtime/host-main.cjs#L771968-L771971) | `ArrowFunctionExpression` | sim | `ctx, args, d` |
| [host:771982-771982](../../../../../../../../reference/runtime/host-main.cjs#L771982-L771982) | `ArrowFunctionExpression` | sim | `ctx, args, d` |
| [host:771991-771994](../../../../../../../../reference/runtime/host-main.cjs#L771991-L771994) | `ArrowFunctionExpression` | sim | `ctx, args, d` |
| [host:772003-772008](../../../../../../../../reference/runtime/host-main.cjs#L772003-L772008) | `ArrowFunctionExpression` | sim | `ctx, args, d` |
| [evaluation:571201-571204](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L571201-L571204) | `ArrowFunctionExpression` | sim | `ctx, args, d` |
| [evaluation:571215-571215](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L571215-L571215) | `ArrowFunctionExpression` | sim | `ctx, args, d` |
| [evaluation:571224-571227](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L571224-L571227) | `ArrowFunctionExpression` | sim | `ctx, args, d` |
| [evaluation:571236-571241](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L571236-L571241) | `ArrowFunctionExpression` | sim | `ctx, args, d` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:771968-771971](../../../../../../../../reference/runtime/host-main.cjs#L771968-L771971) | 0 | 0 | 1 | 0 | 0 | 0 |

A ocorrência em host:771968 usa retorno implícito de arrow function.
| [host:771982-771982](../../../../../../../../reference/runtime/host-main.cjs#L771982-L771982) | 0 | 0 | 1 | 0 | 0 | 0 |

A ocorrência em host:771982 usa retorno implícito de arrow function.
| [host:771991-771994](../../../../../../../../reference/runtime/host-main.cjs#L771991-L771994) | 0 | 0 | 1 | 0 | 0 | 0 |

A ocorrência em host:771991 usa retorno implícito de arrow function.
| [host:772003-772008](../../../../../../../../reference/runtime/host-main.cjs#L772003-L772008) | 0 | 0 | 1 | 0 | 0 | 0 |

A ocorrência em host:772003 usa retorno implícito de arrow function.
| [evaluation:571201-571204](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L571201-L571204) | 0 | 0 | 1 | 0 | 0 | 0 |

A ocorrência em evaluation:571201 usa retorno implícito de arrow function.
| [evaluation:571215-571215](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L571215-L571215) | 0 | 0 | 1 | 0 | 0 | 0 |

A ocorrência em evaluation:571215 usa retorno implícito de arrow function.
| [evaluation:571224-571227](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L571224-L571227) | 0 | 0 | 1 | 0 | 0 | 0 |

A ocorrência em evaluation:571224 usa retorno implícito de arrow function.
| [evaluation:571236-571241](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L571236-L571241) | 0 | 0 | 1 | 0 | 0 | 0 |

A ocorrência em evaluation:571236 usa retorno implícito de arrow function.

### host:771968

Chamadas escritas diretamente neste corpo: `executeStateUpdate`, `inOwnName`, `renderOutcome`.

SHA-256 do trecho: `db60916f219bebff3b5c3783ad12c97ec167a214f330fbd08e717b5f9c88149f`.

### host:771982

Chamadas escritas diretamente neste corpo: `inOwnName`, `setProfile`.

SHA-256 do trecho: `554cf1d8d0110f81d3fc7a9477946a4f91d2e4cb102c34955d4d605ba51edeb1`.

### host:771991

Chamadas escritas diretamente neste corpo: `executeStateUpdate`, `inOwnName`, `renderOutcome`.

SHA-256 do trecho: `f5cd0d9b791064f8923d422d1301335912f9526c7aa0fe9c15d0967d1be792aa`.

### host:772003

Chamadas escritas diretamente neste corpo: `executeStateUpdate`, `inOwnName`, `renderOutcome`.

SHA-256 do trecho: `2bf7006cd238d0328436af43bf4caaa121d4bb1588db429cab11e47536cc1dd5`.

### evaluation:571201

Chamadas escritas diretamente neste corpo: `executeStateUpdate`, `inOwnName`, `renderOutcome`.

SHA-256 do trecho: `db60916f219bebff3b5c3783ad12c97ec167a214f330fbd08e717b5f9c88149f`.

### evaluation:571215

Chamadas escritas diretamente neste corpo: `inOwnName`, `setProfile`.

SHA-256 do trecho: `554cf1d8d0110f81d3fc7a9477946a4f91d2e4cb102c34955d4d605ba51edeb1`.

### evaluation:571224

Chamadas escritas diretamente neste corpo: `executeStateUpdate`, `inOwnName`, `renderOutcome`.

SHA-256 do trecho: `f5cd0d9b791064f8923d422d1301335912f9526c7aa0fe9c15d0967d1be792aa`.

### evaluation:571236

Chamadas escritas diretamente neste corpo: `executeStateUpdate`, `inOwnName`, `renderOutcome`.

SHA-256 do trecho: `2bf7006cd238d0328436af43bf4caaa121d4bb1588db429cab11e47536cc1dd5`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../../guide/methodology/README.md).
