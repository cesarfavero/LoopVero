# `SandInferenceCredentialRenewer.requestImmediateRenewal`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/auth/credential-renewer.ts` · [Module README](../../../../../../modules/host/extensions/auth/credential-renewer-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:454249-454260](../../../../../../../reference/runtime/host-main.cjs#L454249-L454260) | `method` | no | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:454249-454260](../../../../../../../reference/runtime/host-main.cjs#L454249-L454260) | 3 | 0 | 0 | 4 | 0 | 0 |

### host:454249

Calls written directly in this body: `Promise.resolve`, `Promise.withResolvers`, `interrupt`, `renewal.promise.then`, `this.onDemandRenewal.promise.then`.

Assignment or increment targets: `this.onDemandRenewal`.

SHA-256 of the source span: `363eb8bb1a6ef8d965d01f9160f1b289da3fc94bb84e4a4e9ee9964e5ed93f80`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
