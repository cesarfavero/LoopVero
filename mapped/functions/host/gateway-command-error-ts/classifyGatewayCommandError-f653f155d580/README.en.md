# `classifyGatewayCommandError`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/components/gateway/README.en.md).

**Module:** `host/gateway-command-error.ts` · [Module README](../../../../modules/host/gateway-command-error-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:489566-489591](../../../../../reference/runtime/host-main.cjs#L489566-L489591) | `FunctionDeclaration` | no | `error64` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:489566-489591](../../../../../reference/runtime/host-main.cjs#L489566-L489591) | 7 | 0 | 0 | 7 | 0 | 0 |

### host:489566

Calls written directly in this body: `NETWORK_ERRNOS.has`, `findSystemErrno`, `hasTimeoutName`.

SHA-256 of the source span: `a3bd99e2246f67c7f886222f8307e8dc1da1efe87a8241d8b5b53d58c462a328`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
