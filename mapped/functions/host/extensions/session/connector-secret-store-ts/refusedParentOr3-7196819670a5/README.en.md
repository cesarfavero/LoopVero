# `refusedParentOr3`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/session/connector-secret-store.ts` · [Module README](../../../../../../modules/host/extensions/session/connector-secret-store-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:719281-719285](../../../../../../../reference/runtime/host-main.cjs#L719281-L719285) | `FunctionDeclaration` | no | `error64, folder` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:719281-719285](../../../../../../../reference/runtime/host-main.cjs#L719281-L719285) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:719281

Calls written directly in this body: `.isSymbolicLink`, `findSystemErrno`, `new NoFollowRefusedError`.

SHA-256 of the source span: `fe1512326bf81d867d0a319bb686d08288311a57859960a21828d4c55f9c9e43`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
