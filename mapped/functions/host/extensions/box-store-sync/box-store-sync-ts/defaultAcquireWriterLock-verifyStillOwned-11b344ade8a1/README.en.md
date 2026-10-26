# `defaultAcquireWriterLock/verifyStillOwned`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/box-store-sync/box-store-sync.ts` · [Module README](../../../../../../modules/host/extensions/box-store-sync/box-store-sync-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:481595-481595](../../../../../../../reference/runtime/host-main.cjs#L481595-L481595) | `ArrowFunctionExpression` | no | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:481595-481595](../../../../../../../reference/runtime/host-main.cjs#L481595-L481595) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at host:481595 uses an implicit arrow-function return.

### host:481595

Calls written directly in this body: `result.lock.verifyStillOwned`.

SHA-256 of the source span: `8e9566e685c21ea97fd47a3df74aeda15363581fc5158c2250f92ddd8c45fb54`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
