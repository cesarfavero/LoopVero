# `createSandSplitStateTools/execute`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/state-tools/split-tools.ts` · [Module README](../../../../../../../modules/core/runner/tools/state-tools/split-tools-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:771968-771971](../../../../../../../../reference/runtime/host-main.cjs#L771968-L771971) | `ArrowFunctionExpression` | yes | `ctx, args, d` |
| [host:771982-771982](../../../../../../../../reference/runtime/host-main.cjs#L771982-L771982) | `ArrowFunctionExpression` | yes | `ctx, args, d` |
| [host:771991-771994](../../../../../../../../reference/runtime/host-main.cjs#L771991-L771994) | `ArrowFunctionExpression` | yes | `ctx, args, d` |
| [host:772003-772008](../../../../../../../../reference/runtime/host-main.cjs#L772003-L772008) | `ArrowFunctionExpression` | yes | `ctx, args, d` |
| [evaluation:571201-571204](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L571201-L571204) | `ArrowFunctionExpression` | yes | `ctx, args, d` |
| [evaluation:571215-571215](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L571215-L571215) | `ArrowFunctionExpression` | yes | `ctx, args, d` |
| [evaluation:571224-571227](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L571224-L571227) | `ArrowFunctionExpression` | yes | `ctx, args, d` |
| [evaluation:571236-571241](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L571236-L571241) | `ArrowFunctionExpression` | yes | `ctx, args, d` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:771968-771971](../../../../../../../../reference/runtime/host-main.cjs#L771968-L771971) | 0 | 0 | 1 | 0 | 0 | 0 |

The occurrence at host:771968 uses an implicit arrow-function return.
| [host:771982-771982](../../../../../../../../reference/runtime/host-main.cjs#L771982-L771982) | 0 | 0 | 1 | 0 | 0 | 0 |

The occurrence at host:771982 uses an implicit arrow-function return.
| [host:771991-771994](../../../../../../../../reference/runtime/host-main.cjs#L771991-L771994) | 0 | 0 | 1 | 0 | 0 | 0 |

The occurrence at host:771991 uses an implicit arrow-function return.
| [host:772003-772008](../../../../../../../../reference/runtime/host-main.cjs#L772003-L772008) | 0 | 0 | 1 | 0 | 0 | 0 |

The occurrence at host:772003 uses an implicit arrow-function return.
| [evaluation:571201-571204](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L571201-L571204) | 0 | 0 | 1 | 0 | 0 | 0 |

The occurrence at evaluation:571201 uses an implicit arrow-function return.
| [evaluation:571215-571215](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L571215-L571215) | 0 | 0 | 1 | 0 | 0 | 0 |

The occurrence at evaluation:571215 uses an implicit arrow-function return.
| [evaluation:571224-571227](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L571224-L571227) | 0 | 0 | 1 | 0 | 0 | 0 |

The occurrence at evaluation:571224 uses an implicit arrow-function return.
| [evaluation:571236-571241](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L571236-L571241) | 0 | 0 | 1 | 0 | 0 | 0 |

The occurrence at evaluation:571236 uses an implicit arrow-function return.

### host:771968

Calls written directly in this body: `executeStateUpdate`, `inOwnName`, `renderOutcome`.

SHA-256 of the source span: `db60916f219bebff3b5c3783ad12c97ec167a214f330fbd08e717b5f9c88149f`.

### host:771982

Calls written directly in this body: `inOwnName`, `setProfile`.

SHA-256 of the source span: `554cf1d8d0110f81d3fc7a9477946a4f91d2e4cb102c34955d4d605ba51edeb1`.

### host:771991

Calls written directly in this body: `executeStateUpdate`, `inOwnName`, `renderOutcome`.

SHA-256 of the source span: `f5cd0d9b791064f8923d422d1301335912f9526c7aa0fe9c15d0967d1be792aa`.

### host:772003

Calls written directly in this body: `executeStateUpdate`, `inOwnName`, `renderOutcome`.

SHA-256 of the source span: `2bf7006cd238d0328436af43bf4caaa121d4bb1588db429cab11e47536cc1dd5`.

### evaluation:571201

Calls written directly in this body: `executeStateUpdate`, `inOwnName`, `renderOutcome`.

SHA-256 of the source span: `db60916f219bebff3b5c3783ad12c97ec167a214f330fbd08e717b5f9c88149f`.

### evaluation:571215

Calls written directly in this body: `inOwnName`, `setProfile`.

SHA-256 of the source span: `554cf1d8d0110f81d3fc7a9477946a4f91d2e4cb102c34955d4d605ba51edeb1`.

### evaluation:571224

Calls written directly in this body: `executeStateUpdate`, `inOwnName`, `renderOutcome`.

SHA-256 of the source span: `f5cd0d9b791064f8923d422d1301335912f9526c7aa0fe9c15d0967d1be792aa`.

### evaluation:571236

Calls written directly in this body: `executeStateUpdate`, `inOwnName`, `renderOutcome`.

SHA-256 of the source span: `2bf7006cd238d0328436af43bf4caaa121d4bb1588db429cab11e47536cc1dd5`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).
