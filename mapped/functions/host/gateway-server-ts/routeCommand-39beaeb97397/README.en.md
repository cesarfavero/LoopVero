# `routeCommand`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/components/gateway/README.en.md).

**Module:** `host/gateway-server.ts` · [Module README](../../../../modules/host/gateway-server-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:493530-493579](../../../../../reference/runtime/host-main.cjs#L493530-L493579) | `FunctionDeclaration` | yes | `api, method, body, res, req, onCommandError, onCommandComplete` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:493530-493579](../../../../../reference/runtime/host-main.cjs#L493530-L493579) | 4 | 0 | 1 | 2 | 1 | 3 |

### host:493530

Calls written directly in this body: `Date.now`, `beginGatewayCommandTrace`, `classifyGatewayCommandError`, `clientWantsSlimAvatars`, `commandSpan.span.end`, `commandTrace`, `gzipOptionsFor`, `isSandGatewayMethod`, `onCommandComplete`, `onCommandError`, `requestId`, `respondErrorPayload`, `respondJson`, `runGatewayCommand`, `statusForCommandError`.

Assignment or increment targets: `result`.

Explicit throw targets: `error64`.

SHA-256 of the source span: `ac02c34546adb8b070aacf8dc3f7474d39fc4a74c1232f9e6aae8a09084bee0b`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
