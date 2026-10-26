# `CredentialFillLease.window`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/credential-provider/credential-fill-lease.ts` · [Module README](../../../../../../modules/host/extensions/credential-provider/credential-fill-lease-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:548619-548626](../../../../../../../reference/runtime/host-main.cjs#L548619-L548626) | `method` | no | `key` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:548619-548626](../../../../../../../reference/runtime/host-main.cjs#L548619-L548626) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:548619

Calls written directly in this body: `new Map`, `this.windows.get`, `this.windows.set`.

Assignment or increment targets: `state`.

SHA-256 of the source span: `28d8901e5dfd443afc557d14a798d24f9eca4e357531503eb2a92ad5a5f3e815`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
