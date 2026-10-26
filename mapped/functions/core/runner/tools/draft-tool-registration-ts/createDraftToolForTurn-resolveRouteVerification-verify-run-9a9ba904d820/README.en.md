# `createDraftToolForTurn/resolveRouteVerification/verify/run`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/draft-tool-registration.ts` · [Module README](../../../../../../modules/core/runner/tools/draft-tool-registration-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:756189-756193](../../../../../../../reference/runtime/host-main.cjs#L756189-L756193) | `ArrowFunctionExpression` | no | `(none)` |
| [evaluation:542110-542114](../../../../../../../reference/runtime/sand-eval-runner.cjs#L542110-L542114) | `ArrowFunctionExpression` | no | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:756189-756193](../../../../../../../reference/runtime/host-main.cjs#L756189-L756193) | 3 | 0 | 0 | 0 | 0 | 0 |

The occurrence at host:756189 uses an implicit arrow-function return.
| [evaluation:542110-542114](../../../../../../../reference/runtime/sand-eval-runner.cjs#L542110-L542114) | 3 | 0 | 0 | 0 | 0 | 0 |

The occurrence at evaluation:542110 uses an implicit arrow-function return.

### host:756189

Calls written directly in this body: `guarded`, `host.getConversationId`, `hostedSendAs`, `resolveDraftRouteVerification`.

SHA-256 of the source span: `66c3b173ffc52d4c112094d5b79b71ab74bfde51f9c3a02d2324a0452c473676`.

### evaluation:542110

Calls written directly in this body: `guarded`, `host.getConversationId`, `hostedSendAs`, `resolveDraftRouteVerification`.

SHA-256 of the source span: `66c3b173ffc52d4c112094d5b79b71ab74bfde51f9c3a02d2324a0452c473676`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
