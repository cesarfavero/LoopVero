# `refusalClass`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/session/connector-secret-store.ts` · [Module README](../../../../../../modules/host/extensions/session/connector-secret-store-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:719250-719254](../../../../../../../reference/runtime/host-main.cjs#L719250-L719254) | `FunctionDeclaration` | no | `operation, error64` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:719250-719254](../../../../../../../reference/runtime/host-main.cjs#L719250-L719254) | 2 | 0 | 0 | 3 | 0 | 0 |

### host:719250

Calls written directly in this body: `errorLogTag`, `findSystemErrno`.

SHA-256 of the source span: `21a13c5d4f318db99eec606fd1a7b60983cfe56ed2503ddc0500d8a39b0825a1`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
