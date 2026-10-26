# `_MeetingsTools.update/refuse3`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/tools/README.en.md).

**Module:** `core/meetings/meetings-tools.ts` · [Module README](../../../../../modules/core/meetings/meetings-tools-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:572487-572489](../../../../../../reference/runtime/sand-eval-runner.cjs#L572487-L572489) | `ArrowFunctionExpression` | no | `reason` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:572487-572489](../../../../../../reference/runtime/sand-eval-runner.cjs#L572487-L572489) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at evaluation:572487 uses an implicit arrow-function return.

### evaluation:572487

Calls written directly in this body: `MeetingJoinRefusals.from`, `deps.meetings.recordJoinRefused`.

SHA-256 of the source span: `bb4e53ba5e58b6aabb1afff065a7403a46df24ac85d7823e0246d009b44bddca`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
