# `SandInferenceCredentialRenewer.reportResult`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/auth/credential-renewer.ts` · [Module README](../../../../../../modules/host/extensions/auth/credential-renewer-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:454351-454362](../../../../../../../reference/runtime/host-main.cjs#L454351-L454362) | `method` | no | `outcome, durationMs, errorClass, errorSummary` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:454351-454362](../../../../../../../reference/runtime/host-main.cjs#L454351-L454362) | 0 | 0 | 0 | 0 | 0 | 1 |

### host:454351

Calls written directly in this body: `this.options.onResult`.

SHA-256 of the source span: `611249a9ac27fd464d9701c7b88e1494e213769d0c02517166ea5494af1f1860`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
