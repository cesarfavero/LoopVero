# `runHostMain/beforeResumeOwnership`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/architecture/README.en.md).

**Module:** `host/main.ts` · [Module README](../../../../modules/host/main-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:786972-787019](../../../../../reference/runtime/host-main.cjs#L786972-L787019) | `ArrowFunctionExpression` | yes | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:786972-787019](../../../../../reference/runtime/host-main.cjs#L786972-L787019) | 2 | 0 | 1 | 0 | 0 | 0 |

### host:786972

Calls written directly in this body: `createWebAuthnProxyCredentialPublisher`, `createWebAuthnProxyRefusalLog`, `gateWebAuthnProxyOnDesktopSettings`, `gatewayScheme`, `gatewayStarted.resolve`, `host.getApi`, `host.getCookieOriginApprovalBridge`, `host.getLocalExecBridge`, `host.getWebAuthnBridge`, `installPolicyStopReporter`, `installShutdownHandlers`, `resolveGatewayServerConfig`, `startGatewayServer`.

Assignment or increment targets: `stage`, `webAuthnProxyCredential2`.

SHA-256 of the source span: `5ee756673c855f61c46c76f02929de0d1a7539f17ad77932d9cb4b29d5bc8425`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
