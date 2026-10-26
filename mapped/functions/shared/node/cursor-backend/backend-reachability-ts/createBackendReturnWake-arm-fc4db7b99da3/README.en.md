# `createBackendReturnWake/arm`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `shared/node/cursor-backend/backend-reachability.ts` · [Module README](../../../../../../modules/shared/node/cursor-backend/backend-reachability-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:711289-711301](../../../../../../../reference/runtime/host-main.cjs#L711289-L711301) | `FunctionExpression` | no | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:711289-711301](../../../../../../../reference/runtime/host-main.cjs#L711289-L711301) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:711289

Calls written directly in this body: `armed.wake.dispose`, `new AbortController`.

Assignment or increment targets: `armed`.

SHA-256 of the source span: `6f3726e48c32bec23f9b6c54e5c14cca527e8f305dc6fb63b55f44398308690c`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
