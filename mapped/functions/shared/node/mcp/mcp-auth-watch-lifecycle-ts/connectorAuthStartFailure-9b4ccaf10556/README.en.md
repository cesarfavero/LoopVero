# `connectorAuthStartFailure`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/integrations/README.en.md).

**Module:** `shared/node/mcp/mcp-auth-watch-lifecycle.ts` · [Module README](../../../../../../modules/shared/node/mcp/mcp-auth-watch-lifecycle-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:685635-685641](../../../../../../../reference/runtime/host-main.cjs#L685635-L685641) | `FunctionDeclaration` | no | `error64` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:685635-685641](../../../../../../../reference/runtime/host-main.cjs#L685635-L685641) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:685635

Calls written directly in this body: `SandError.connectorAuthStartFailed`, `isDeadlineExceededConnectError`, `startFailureReason`.

SHA-256 of the source span: `4c86996d6d417c4c014941b1dde54e534a8211ffb6ff3aa530d9e7e8e65efd9c`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
