# `startGrokBotBoxIdentitySocketServer/stop`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/auth/identity-socket-server.ts` · [Module README](../../../../../../modules/host/extensions/auth/identity-socket-server-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:499777-499780](../../../../../../../reference/runtime/host-main.cjs#L499777-L499780) | `ArrowFunctionExpression` | yes | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:499777-499780](../../../../../../../reference/runtime/host-main.cjs#L499777-L499780) | 0 | 0 | 2 | 0 | 0 | 0 |

### host:499777

Calls written directly in this body: `closeListener`, `unlinkIfPresent`.

SHA-256 of the source span: `3957fb04586462a29b52d460f693f8e700565da7366d3cfa85ecd9bdffaa477b`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
