# `createUpdateMeetingTool/execute`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/tools/README.en.md).

**Module:** `core/meetings/meetings-tools.ts` · [Module README](../../../../../modules/core/meetings/meetings-tools-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:773578-773578](../../../../../../reference/runtime/host-main.cjs#L773578-L773578) | `ArrowFunctionExpression` | no | `ctx, args, d` |
| [evaluation:572804-572804](../../../../../../reference/runtime/sand-eval-runner.cjs#L572804-L572804) | `ArrowFunctionExpression` | no | `ctx, args, d` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:773578-773578](../../../../../../reference/runtime/host-main.cjs#L773578-L773578) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at host:773578 uses an implicit arrow-function return.
| [evaluation:572804-572804](../../../../../../reference/runtime/sand-eval-runner.cjs#L572804-L572804) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at evaluation:572804 uses an implicit arrow-function return.

### host:773578

Calls written directly in this body: `MeetingsTools.update`.

SHA-256 of the source span: `720a608de8e2a5bf236e48aecc5f515c4108d4a2776d37f21207e281e56d1f16`.

### evaluation:572804

Calls written directly in this body: `MeetingsTools.update`.

SHA-256 of the source span: `720a608de8e2a5bf236e48aecc5f515c4108d4a2776d37f21207e281e56d1f16`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
