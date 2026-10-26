# `createFindMeetingTool/execute`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/tools/README.en.md).

**Module:** `core/meetings/meetings-tools.ts` · [Module README](../../../../../modules/core/meetings/meetings-tools-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:773599-773599](../../../../../../reference/runtime/host-main.cjs#L773599-L773599) | `ArrowFunctionExpression` | no | `_ctx, args, d` |
| [evaluation:572825-572825](../../../../../../reference/runtime/sand-eval-runner.cjs#L572825-L572825) | `ArrowFunctionExpression` | no | `_ctx, args, d` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:773599-773599](../../../../../../reference/runtime/host-main.cjs#L773599-L773599) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at host:773599 uses an implicit arrow-function return.
| [evaluation:572825-572825](../../../../../../reference/runtime/sand-eval-runner.cjs#L572825-L572825) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at evaluation:572825 uses an implicit arrow-function return.

### host:773599

Calls written directly in this body: `MeetingsTools.find`.

SHA-256 of the source span: `b19203686b644b011492d9cc0fce65100b290a34f1043483da319d25edf4630e`.

### evaluation:572825

Calls written directly in this body: `MeetingsTools.find`.

SHA-256 of the source span: `b19203686b644b011492d9cc0fce65100b290a34f1043483da319d25edf4630e`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
