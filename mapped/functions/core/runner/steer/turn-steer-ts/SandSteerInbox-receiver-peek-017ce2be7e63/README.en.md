# `SandSteerInbox.receiver/peek`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/steer/turn-steer.ts` · [Module README](../../../../../../modules/core/runner/steer/turn-steer-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:589813-589819](../../../../../../../reference/runtime/sand-eval-runner.cjs#L589813-L589819) | `ArrowFunctionExpression` | no | `_ctx` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:589813-589819](../../../../../../../reference/runtime/sand-eval-runner.cjs#L589813-L589819) | 1 | 0 | 0 | 1 | 0 | 0 |

### evaluation:589813

Calls written directly in this body: `Promise.resolve`, `this.settlePoppedAsDelivered`, `toRedactedConversationAction`.

SHA-256 of the source span: `8b39900204d8c522f46924894e86a9b2ce1a9c47f0a5686a0bbf14dc04612d67`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
