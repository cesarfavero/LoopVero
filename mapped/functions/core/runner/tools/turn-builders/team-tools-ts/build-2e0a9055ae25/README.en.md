# `build`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/turn-builders/team-tools.ts` · [Module README](../../../../../../../modules/core/runner/tools/turn-builders/team-tools-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:781718-781718](../../../../../../../../reference/runtime/host-main.cjs#L781718-L781718) | `ArrowFunctionExpression` | no | `{ host, turn, emitCard }` |
| [host:781722-781725](../../../../../../../../reference/runtime/host-main.cjs#L781722-L781725) | `ArrowFunctionExpression` | no | `{ host, turn, emitCard }` |
| [host:781729-781742](../../../../../../../../reference/runtime/host-main.cjs#L781729-L781742) | `ArrowFunctionExpression` | no | `{     host,     turn   }` |
| [evaluation:582065-582065](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L582065-L582065) | `ArrowFunctionExpression` | no | `{ host, turn, emitCard }` |
| [evaluation:582069-582072](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L582069-L582072) | `ArrowFunctionExpression` | no | `{ host, turn, emitCard }` |
| [evaluation:582076-582089](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L582076-L582089) | `ArrowFunctionExpression` | no | `{     host,     turn   }` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:781718-781718](../../../../../../../../reference/runtime/host-main.cjs#L781718-L781718) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at host:781718 uses an implicit arrow-function return.
| [host:781722-781725](../../../../../../../../reference/runtime/host-main.cjs#L781722-L781725) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at host:781722 uses an implicit arrow-function return.
| [host:781729-781742](../../../../../../../../reference/runtime/host-main.cjs#L781729-L781742) | 1 | 0 | 0 | 0 | 0 | 0 |

The occurrence at host:781729 uses an implicit arrow-function return.
| [evaluation:582065-582065](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L582065-L582065) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at evaluation:582065 uses an implicit arrow-function return.
| [evaluation:582069-582072](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L582069-L582072) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at evaluation:582069 uses an implicit arrow-function return.
| [evaluation:582076-582089](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L582076-L582089) | 1 | 0 | 0 | 0 | 0 | 0 |

The occurrence at evaluation:582076 uses an implicit arrow-function return.

### host:781718

Calls written directly in this body: `teamAccessTurnTools`.

SHA-256 of the source span: `7ff777bc84d4eb01cfbddafb3886d71f78b57e2327e05498b6f5207ac0a1d477`.

### host:781722

Calls written directly in this body: `createChannelsSetupTools`.

SHA-256 of the source span: `68100436d24a897b42f56b526065b28775bccd8532dbf09cdc1af6a4346b63cc`.

### host:781729

Calls written directly in this body: `createTeamPublishTool`.

SHA-256 of the source span: `9cac3342d6f3bffa0f7ccb3da9cd7d7b30c501ebcafa83fdd11b63da343d522c`.

### evaluation:582065

Calls written directly in this body: `teamAccessTurnTools`.

SHA-256 of the source span: `7ff777bc84d4eb01cfbddafb3886d71f78b57e2327e05498b6f5207ac0a1d477`.

### evaluation:582069

Calls written directly in this body: `createChannelsSetupTools`.

SHA-256 of the source span: `68100436d24a897b42f56b526065b28775bccd8532dbf09cdc1af6a4346b63cc`.

### evaluation:582076

Calls written directly in this body: `createTeamPublishTool`.

SHA-256 of the source span: `9cac3342d6f3bffa0f7ccb3da9cd7d7b30c501ebcafa83fdd11b63da343d522c`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).
