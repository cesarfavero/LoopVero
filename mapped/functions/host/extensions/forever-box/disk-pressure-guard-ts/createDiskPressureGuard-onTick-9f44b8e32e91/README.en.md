# `createDiskPressureGuard/onTick`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/forever-box/disk-pressure-guard.ts` · [Module README](../../../../../../modules/host/extensions/forever-box/disk-pressure-guard-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:679773-679779](../../../../../../../reference/runtime/host-main.cjs#L679773-L679779) | `ArrowFunctionExpression` | no | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:679773-679779](../../../../../../../reference/runtime/host-main.cjs#L679773-L679779) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:679773

Calls written directly in this body: `.finally`, `check2`.

Assignment or increment targets: `inFlight`.

SHA-256 of the source span: `875ac58f184f25790dacd9c91ec48c6dd793e3a03f2f49720443b8acb2893675`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
