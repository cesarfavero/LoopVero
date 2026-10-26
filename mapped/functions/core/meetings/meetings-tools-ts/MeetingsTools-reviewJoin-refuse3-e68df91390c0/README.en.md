# `_MeetingsTools.reviewJoin/refuse3`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/tools/README.en.md).

**Module:** `core/meetings/meetings-tools.ts` · [Module README](../../../../../modules/core/meetings/meetings-tools-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:572584-572586](../../../../../../reference/runtime/sand-eval-runner.cjs#L572584-L572586) | `ArrowFunctionExpression` | no | `reason` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:572584-572586](../../../../../../reference/runtime/sand-eval-runner.cjs#L572584-L572586) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at evaluation:572584 uses an implicit arrow-function return.

### evaluation:572584

Calls written directly in this body: `MeetingJoinRefusals.from`, `deps.meetings.recordJoinRefused`.

SHA-256 of the source span: `b1a996afe53e2dedb08e079c1239b2d44967a0d7c7fdcea3a9cfd9d53948cbe9`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
