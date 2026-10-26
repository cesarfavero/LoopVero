# `SandInferenceCredentialRenewer.close`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/auth/credential-renewer.ts` · [Module README](../../../../../../modules/host/extensions/auth/credential-renewer-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:454245-454248](../../../../../../../reference/runtime/host-main.cjs#L454245-L454248) | `method` | no | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:454245-454248](../../../../../../../reference/runtime/host-main.cjs#L454245-L454248) | 0 | 0 | 0 | 0 | 0 | 0 |

### host:454245

Calls written directly in this body: `this.abort.abort`, `this.completeOnDemandRenewal`.

SHA-256 of the source span: `9c16df42b61b89e4e86a7c95a0708bdbf20916e053a3a93900e62c156bca86bb`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
