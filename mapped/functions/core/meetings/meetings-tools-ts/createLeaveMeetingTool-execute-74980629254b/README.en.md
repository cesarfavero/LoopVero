# `createLeaveMeetingTool/execute`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/tools/README.en.md).

**Module:** `core/meetings/meetings-tools.ts` · [Module README](../../../../../modules/core/meetings/meetings-tools-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:773568-773568](../../../../../../reference/runtime/host-main.cjs#L773568-L773568) | `ArrowFunctionExpression` | no | `ctx, args, d` |
| [evaluation:572794-572794](../../../../../../reference/runtime/sand-eval-runner.cjs#L572794-L572794) | `ArrowFunctionExpression` | no | `ctx, args, d` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:773568-773568](../../../../../../reference/runtime/host-main.cjs#L773568-L773568) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at host:773568 uses an implicit arrow-function return.
| [evaluation:572794-572794](../../../../../../reference/runtime/sand-eval-runner.cjs#L572794-L572794) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at evaluation:572794 uses an implicit arrow-function return.

### host:773568

Calls written directly in this body: `MeetingsTools.leave`.

SHA-256 of the source span: `2e6e3652ac11bfe20e768dc5e3201ef3f3988ee5327c160f82916a6e5a6ade38`.

### evaluation:572794

Calls written directly in this body: `MeetingsTools.leave`.

SHA-256 of the source span: `2e6e3652ac11bfe20e768dc5e3201ef3f3988ee5327c160f82916a6e5a6ade38`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
