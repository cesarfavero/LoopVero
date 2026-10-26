# `destroyOnDeadline`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/auth/identity-socket-server.ts` · [Module README](../../../../../../modules/host/extensions/auth/identity-socket-server-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:499512-499516](../../../../../../../reference/runtime/host-main.cjs#L499512-L499516) | `FunctionDeclaration` | no | `error64, socket` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:499512-499516](../../../../../../../reference/runtime/host-main.cjs#L499512-L499516) | 1 | 0 | 0 | 0 | 0 | 0 |

### host:499512

Calls written directly in this body: `socket.destroy`.

SHA-256 of the source span: `81590179effdb2d0ac80680c6ba1aeb846f6e382be393e3356c305daf5cce080`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
