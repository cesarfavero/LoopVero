# `SandCredentialRenewalError.constructor`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/auth/credential-renewer.ts` · [Module README](../../../../../../modules/host/extensions/auth/credential-renewer-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:454163-454167](../../../../../../../reference/runtime/host-main.cjs#L454163-L454167) | `method` | no | `message, options2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:454163-454167](../../../../../../../reference/runtime/host-main.cjs#L454163-L454167) | 1 | 0 | 0 | 0 | 0 | 0 |

### host:454163

Calls written directly in this body: `super`.

Assignment or increment targets: `this.code`, `this.httpStatus`.

SHA-256 of the source span: `efe32991b50f611bef873f080cf2142a51f1e7eb46b9d4a0b60667c43a4c64f9`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
