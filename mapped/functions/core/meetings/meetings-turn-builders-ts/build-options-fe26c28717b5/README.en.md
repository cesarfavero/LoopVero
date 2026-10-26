# `build/options`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `core/meetings/meetings-turn-builders.ts` · [Module README](../../../../../modules/core/meetings/meetings-turn-builders-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:773672-773672](../../../../../../reference/runtime/host-main.cjs#L773672-L773672) | `ArrowFunctionExpression` | no | `(none)` |
| [host:773677-773683](../../../../../../reference/runtime/host-main.cjs#L773677-L773683) | `ArrowFunctionExpression` | no | `(none)` |
| [evaluation:572898-572898](../../../../../../reference/runtime/sand-eval-runner.cjs#L572898-L572898) | `ArrowFunctionExpression` | no | `(none)` |
| [evaluation:572903-572909](../../../../../../reference/runtime/sand-eval-runner.cjs#L572903-L572909) | `ArrowFunctionExpression` | no | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:773672-773672](../../../../../../reference/runtime/host-main.cjs#L773672-L773672) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at host:773672 uses an implicit arrow-function return.
| [host:773677-773683](../../../../../../reference/runtime/host-main.cjs#L773677-L773683) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at host:773677 uses an implicit arrow-function return.
| [evaluation:572898-572898](../../../../../../reference/runtime/sand-eval-runner.cjs#L572898-L572898) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at evaluation:572898 uses an implicit arrow-function return.
| [evaluation:572903-572909](../../../../../../reference/runtime/sand-eval-runner.cjs#L572903-L572909) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at evaluation:572903 uses an implicit arrow-function return.

### host:773672

Calls written directly in this body: `mcpReviewOptions`.

SHA-256 of the source span: `f75c89317e22f29c2d94af754d331b8ca1c3580db712d59d6fcc350632319082`.

### host:773677

Calls written directly in this body: `host.activeTurnAutomationWakeEmbedsExternalEvent`, `host.activeTurnRequestSource`, `mcpReviewOptions`.

SHA-256 of the source span: `0221c3c6dd0abfeb574203786241400d064826dd140d0e5b43d89520f0d26b40`.

### evaluation:572898

Calls written directly in this body: `mcpReviewOptions`.

SHA-256 of the source span: `f75c89317e22f29c2d94af754d331b8ca1c3580db712d59d6fcc350632319082`.

### evaluation:572903

Calls written directly in this body: `host.activeTurnAutomationWakeEmbedsExternalEvent`, `host.activeTurnRequestSource`, `mcpReviewOptions`.

SHA-256 of the source span: `0221c3c6dd0abfeb574203786241400d064826dd140d0e5b43d89520f0d26b40`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
