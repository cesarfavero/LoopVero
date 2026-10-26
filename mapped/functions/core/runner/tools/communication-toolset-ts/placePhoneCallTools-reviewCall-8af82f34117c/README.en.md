# `placePhoneCallTools/reviewCall`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/communication-toolset.ts` · [Module README](../../../../../../modules/core/runner/tools/communication-toolset-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:763769-763784](../../../../../../../reference/runtime/host-main.cjs#L763769-L763784) | `ArrowFunctionExpression` | yes | `{ toolCallId, target, signal }` |
| [evaluation:556817-556832](../../../../../../../reference/runtime/sand-eval-runner.cjs#L556817-L556832) | `ArrowFunctionExpression` | yes | `{ toolCallId, target, signal }` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:763769-763784](../../../../../../../reference/runtime/host-main.cjs#L763769-L763784) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:556817-556832](../../../../../../../reference/runtime/sand-eval-runner.cjs#L556817-L556832) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:763769

Calls written directly in this body: `host.assertNoPendingAutoReviewApproval`, `host.getConversationId`, `reviewSandOutboundCall`.

SHA-256 of the source span: `0c0d79afb48c68b883ede689d7052ff2ef246fe7a59968f62266a8f4f6a1f498`.

### evaluation:556817

Calls written directly in this body: `host.assertNoPendingAutoReviewApproval`, `host.getConversationId`, `reviewSandOutboundCall`.

SHA-256 of the source span: `0c0d79afb48c68b883ede689d7052ff2ef246fe7a59968f62266a8f4f6a1f498`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
