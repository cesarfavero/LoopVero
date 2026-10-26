# `computerAutoReviewOptions/captureDisplayStateIdentity`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/browser-computer/README.en.md).

**Module:** `core/runner/tools/sand-computer-tool.ts` · [Module README](../../../../../../modules/core/runner/tools/sand-computer-tool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:777402-777407](../../../../../../../reference/runtime/host-main.cjs#L777402-L777407) | `ArrowFunctionExpression` | yes | `stateCtx, stateToolCallId` |
| [evaluation:577047-577052](../../../../../../../reference/runtime/sand-eval-runner.cjs#L577047-L577052) | `ArrowFunctionExpression` | yes | `stateCtx, stateToolCallId` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:777402-777407](../../../../../../../reference/runtime/host-main.cjs#L777402-L777407) | 0 | 0 | 1 | 0 | 0 | 0 |

The occurrence at host:777402 uses an implicit arrow-function return.
| [evaluation:577047-577052](../../../../../../../reference/runtime/sand-eval-runner.cjs#L577047-L577052) | 0 | 0 | 1 | 0 | 0 | 0 |

The occurrence at evaluation:577047 uses an implicit arrow-function return.

### host:777402

Calls written directly in this body: `captureComputerDisplayStateIdentity`.

SHA-256 of the source span: `91414fb7f11938149c6a66c3c9a287c8fcece26bd2775c5bd087f774365bb04a`.

### evaluation:577047

Calls written directly in this body: `captureComputerDisplayStateIdentity`.

SHA-256 of the source span: `91414fb7f11938149c6a66c3c9a287c8fcece26bd2775c5bd087f774365bb04a`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
