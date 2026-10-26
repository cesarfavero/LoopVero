# `installShutdownHandlers`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/architecture/README.en.md).

**Module:** `host/main.ts` · [Module README](../../../../modules/host/main-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:787052-787083](../../../../../reference/runtime/host-main.cjs#L787052-L787083) | `FunctionDeclaration` | no | `host, gateway, hostLock, webAuthnProxyCredential` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:787052-787083](../../../../../reference/runtime/host-main.cjs#L787052-L787083) | 0 | 0 | 0 | 0 | 0 | 0 |

### host:787052

Calls written directly in this body: `process.on`.

SHA-256 of the source span: `607cf39646ee9f80207914d2570242ba3e632eb6ed7bca2ff3ddc2dc105c1eab`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
