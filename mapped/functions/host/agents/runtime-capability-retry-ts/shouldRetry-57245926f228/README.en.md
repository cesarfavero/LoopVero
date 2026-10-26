# `shouldRetry`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `host/agents/runtime-capability-retry.ts` · [Module README](../../../../../modules/host/agents/runtime-capability-retry-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:494883-494883](../../../../../../reference/runtime/host-main.cjs#L494883-L494883) | `ArrowFunctionExpression` | no | `error64` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:494883-494883](../../../../../../reference/runtime/host-main.cjs#L494883-L494883) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at host:494883 uses an implicit arrow-function return.

### host:494883

Calls written directly in this body: `isRateLimitConnectError`, `isTransientConnectError`.

SHA-256 of the source span: `cb3ad1462e9c1238475368257d9d1d315be65c730ab0eeade22cd36eba2bec0d`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
