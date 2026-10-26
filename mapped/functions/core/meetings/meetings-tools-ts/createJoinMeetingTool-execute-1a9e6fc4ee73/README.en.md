# `createJoinMeetingTool/execute`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/tools/README.en.md).

**Module:** `core/meetings/meetings-tools.ts` · [Module README](../../../../../modules/core/meetings/meetings-tools-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:773558-773558](../../../../../../reference/runtime/host-main.cjs#L773558-L773558) | `ArrowFunctionExpression` | no | `ctx, args, d` |
| [evaluation:572784-572784](../../../../../../reference/runtime/sand-eval-runner.cjs#L572784-L572784) | `ArrowFunctionExpression` | no | `ctx, args, d` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:773558-773558](../../../../../../reference/runtime/host-main.cjs#L773558-L773558) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at host:773558 uses an implicit arrow-function return.
| [evaluation:572784-572784](../../../../../../reference/runtime/sand-eval-runner.cjs#L572784-L572784) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at evaluation:572784 uses an implicit arrow-function return.

### host:773558

Calls written directly in this body: `MeetingsTools.join`.

SHA-256 of the source span: `61bc4b286c1f0f5cda61fcdc584ed317d778e4dc900b357f87eb91937d2cb716`.

### evaluation:572784

Calls written directly in this body: `MeetingsTools.join`.

SHA-256 of the source span: `61bc4b286c1f0f5cda61fcdc584ed317d778e4dc900b357f87eb91937d2cb716`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
