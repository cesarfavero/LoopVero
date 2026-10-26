# `respondTool/execute/reviewed`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/tools/README.en.md).

**Module:** `core/meetings/meeting-request-tools.ts` · [Module README](../../../../../modules/core/meetings/meeting-request-tools-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:763393-763393](../../../../../../reference/runtime/host-main.cjs#L763393-L763393) | `ArrowFunctionExpression` | no | `review` |
| [evaluation:556358-556358](../../../../../../reference/runtime/sand-eval-runner.cjs#L556358-L556358) | `ArrowFunctionExpression` | no | `review` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:763393-763393](../../../../../../reference/runtime/host-main.cjs#L763393-L763393) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at host:763393 uses an implicit arrow-function return.
| [evaluation:556358-556358](../../../../../../reference/runtime/sand-eval-runner.cjs#L556358-L556358) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at evaluation:556358 uses an implicit arrow-function return.

### host:763393

Calls written directly in this body: `queued.reviewed`.

SHA-256 of the source span: `ac051550eb42bbdcac587ccc6d6d539b157b5e55f0c345bc2556944ef5ac0f9a`.

### evaluation:556358

Calls written directly in this body: `queued.reviewed`.

SHA-256 of the source span: `ac051550eb42bbdcac587ccc6d6d539b157b5e55f0c345bc2556944ef5ac0f9a`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
