# `CredentialFillLease.canStartAutofill`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/credential-provider/credential-fill-lease.ts` · [Module README](../../../../../../modules/host/extensions/credential-provider/credential-fill-lease-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:548495-548499](../../../../../../../reference/runtime/host-main.cjs#L548495-L548499) | `method` | no | `windowIndex` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:548495-548499](../../../../../../../reference/runtime/host-main.cjs#L548495-L548499) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:548495

Calls written directly in this body: `.every`, `this.scope`, `windowKey`.

SHA-256 of the source span: `d514716b44043080cedf8df0b41f146b288cacdffbb6df1f24aa53582ca1f412`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
