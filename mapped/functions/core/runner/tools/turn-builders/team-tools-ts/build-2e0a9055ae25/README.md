# `build`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/turn-builders/team-tools.ts` · [README do módulo](../../../../../../../modules/core/runner/tools/turn-builders/team-tools-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:781718-781718](../../../../../../../../reference/runtime/host-main.cjs#L781718-L781718) | `ArrowFunctionExpression` | não | `{ host, turn, emitCard }` |
| [host:781722-781725](../../../../../../../../reference/runtime/host-main.cjs#L781722-L781725) | `ArrowFunctionExpression` | não | `{ host, turn, emitCard }` |
| [host:781729-781742](../../../../../../../../reference/runtime/host-main.cjs#L781729-L781742) | `ArrowFunctionExpression` | não | `{     host,     turn   }` |
| [evaluation:582065-582065](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L582065-L582065) | `ArrowFunctionExpression` | não | `{ host, turn, emitCard }` |
| [evaluation:582069-582072](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L582069-L582072) | `ArrowFunctionExpression` | não | `{ host, turn, emitCard }` |
| [evaluation:582076-582089](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L582076-L582089) | `ArrowFunctionExpression` | não | `{     host,     turn   }` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:781718-781718](../../../../../../../../reference/runtime/host-main.cjs#L781718-L781718) | 0 | 0 | 0 | 0 | 0 | 0 |

A ocorrência em host:781718 usa retorno implícito de arrow function.
| [host:781722-781725](../../../../../../../../reference/runtime/host-main.cjs#L781722-L781725) | 0 | 0 | 0 | 0 | 0 | 0 |

A ocorrência em host:781722 usa retorno implícito de arrow function.
| [host:781729-781742](../../../../../../../../reference/runtime/host-main.cjs#L781729-L781742) | 1 | 0 | 0 | 0 | 0 | 0 |

A ocorrência em host:781729 usa retorno implícito de arrow function.
| [evaluation:582065-582065](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L582065-L582065) | 0 | 0 | 0 | 0 | 0 | 0 |

A ocorrência em evaluation:582065 usa retorno implícito de arrow function.
| [evaluation:582069-582072](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L582069-L582072) | 0 | 0 | 0 | 0 | 0 | 0 |

A ocorrência em evaluation:582069 usa retorno implícito de arrow function.
| [evaluation:582076-582089](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L582076-L582089) | 1 | 0 | 0 | 0 | 0 | 0 |

A ocorrência em evaluation:582076 usa retorno implícito de arrow function.

### host:781718

Chamadas escritas diretamente neste corpo: `teamAccessTurnTools`.

SHA-256 do trecho: `7ff777bc84d4eb01cfbddafb3886d71f78b57e2327e05498b6f5207ac0a1d477`.

### host:781722

Chamadas escritas diretamente neste corpo: `createChannelsSetupTools`.

SHA-256 do trecho: `68100436d24a897b42f56b526065b28775bccd8532dbf09cdc1af6a4346b63cc`.

### host:781729

Chamadas escritas diretamente neste corpo: `createTeamPublishTool`.

SHA-256 do trecho: `9cac3342d6f3bffa0f7ccb3da9cd7d7b30c501ebcafa83fdd11b63da343d522c`.

### evaluation:582065

Chamadas escritas diretamente neste corpo: `teamAccessTurnTools`.

SHA-256 do trecho: `7ff777bc84d4eb01cfbddafb3886d71f78b57e2327e05498b6f5207ac0a1d477`.

### evaluation:582069

Chamadas escritas diretamente neste corpo: `createChannelsSetupTools`.

SHA-256 do trecho: `68100436d24a897b42f56b526065b28775bccd8532dbf09cdc1af6a4346b63cc`.

### evaluation:582076

Chamadas escritas diretamente neste corpo: `createTeamPublishTool`.

SHA-256 do trecho: `9cac3342d6f3bffa0f7ccb3da9cd7d7b30c501ebcafa83fdd11b63da343d522c`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../../guide/methodology/README.md).
