# `createGetMeetingSummaryTool/execute`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/tools/README.en.md).

**Module:** `core/meetings/meetings-tools.ts` · [Module README](../../../../../modules/core/meetings/meetings-tools-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:773609-773609](../../../../../../reference/runtime/host-main.cjs#L773609-L773609) | `ArrowFunctionExpression` | no | `_ctx, args, d` |
| [evaluation:572835-572835](../../../../../../reference/runtime/sand-eval-runner.cjs#L572835-L572835) | `ArrowFunctionExpression` | no | `_ctx, args, d` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:773609-773609](../../../../../../reference/runtime/host-main.cjs#L773609-L773609) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at host:773609 uses an implicit arrow-function return.
| [evaluation:572835-572835](../../../../../../reference/runtime/sand-eval-runner.cjs#L572835-L572835) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at evaluation:572835 uses an implicit arrow-function return.

### host:773609

Calls written directly in this body: `MeetingsTools.summary`.

SHA-256 of the source span: `c7bb278bf78be6f9072e695b408271ca95eb183b3450589697681dac224e89f8`.

### evaluation:572835

Calls written directly in this body: `MeetingsTools.summary`.

SHA-256 of the source span: `c7bb278bf78be6f9072e695b408271ca95eb183b3450589697681dac224e89f8`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
