# `readInstalledExtensionId`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/credential-provider/onepassword-broker-bridge.ts` · [Module README](../../../../../../modules/host/extensions/credential-provider/onepassword-broker-bridge-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:549346-549359](../../../../../../../reference/runtime/host-main.cjs#L549346-L549359) | `FunctionDeclaration` | yes | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:549346-549359](../../../../../../../reference/runtime/host-main.cjs#L549346-L549359) | 2 | 1 | 1 | 2 | 1 | 1 |

### host:549346

Calls written directly in this body: `.trim`, `/^[a-p]{32}$/.test`, `findSystemErrno`.

Explicit throw targets: `error64`.

SHA-256 of the source span: `0b036089f8a0cff969a7ad738472a34f172868cc52adc321b92a497c65fe3055`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
