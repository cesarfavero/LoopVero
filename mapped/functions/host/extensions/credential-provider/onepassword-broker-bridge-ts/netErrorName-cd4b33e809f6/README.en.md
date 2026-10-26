# `netErrorName`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/credential-provider/onepassword-broker-bridge.ts` · [Module README](../../../../../../modules/host/extensions/credential-provider/onepassword-broker-bridge-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:549506-549509](../../../../../../../reference/runtime/host-main.cjs#L549506-L549509) | `FunctionDeclaration` | no | `errorText` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:549506-549509](../../../../../../../reference/runtime/host-main.cjs#L549506-L549509) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:549506

Calls written directly in this body: `NET_ERROR_NAME.exec`, `isNetErrorName`.

SHA-256 of the source span: `408b26609a9e745515c6dfb4d3fc17015bb7a03f82f540f8bb1ac04168fe24a0`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
