# `mapMintResult`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/auth/identity-socket-server.ts` · [Module README](../../../../../../modules/host/extensions/auth/identity-socket-server-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:499611-499644](../../../../../../../reference/runtime/host-main.cjs#L499611-L499644) | `FunctionDeclaration` | no | `res, minted` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:499611-499644](../../../../../../../reference/runtime/host-main.cjs#L499611-L499644) | 7 | 0 | 0 | 4 | 0 | 0 |

### host:499611

Calls written directly in this body: `mapBackendStatusToGuestStatus`, `send`, `sendError`, `sendJson`.

SHA-256 of the source span: `224ed3e38dba1ba3bee2e04b74d4483af168aec771086ccedcc653e5626126db`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
