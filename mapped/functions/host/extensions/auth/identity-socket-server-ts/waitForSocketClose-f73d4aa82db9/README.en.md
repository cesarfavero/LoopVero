# `waitForSocketClose`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/auth/identity-socket-server.ts` · [Module README](../../../../../../modules/host/extensions/auth/identity-socket-server-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:499503-499511](../../../../../../../reference/runtime/host-main.cjs#L499503-L499511) | `FunctionDeclaration` | no | `socket` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:499503-499511](../../../../../../../reference/runtime/host-main.cjs#L499503-L499511) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:499503

Calls written directly in this body: `new Promise`.

SHA-256 of the source span: `c0d47c908f7f45f8a337fa5c7b79db4a9d6a8d52dad830ff6223a0a5b6b6af77`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
