# `handleRequest`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/components/gateway/README.en.md).

**Module:** `host/gateway-server.ts` · [Module README](../../../../modules/host/gateway-server-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:493851-493962](../../../../../reference/runtime/host-main.cjs#L493851-L493962) | `FunctionDeclaration` | yes | `deps, req, res, eventStreamEchoes` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:493851-493962](../../../../../reference/runtime/host-main.cjs#L493851-L493962) | 25 | 1 | 5 | 21 | 0 | 0 |

### host:493851

Calls written directly in this body: `GATEWAY_EVENTS_ECHO_NONCE_PATTERN.test`, `SECRET_VALUE_COMMANDS.has`, `deps.getHealth`, `deps.isWebAuthnProxyCredentialLive`, `deps.onDesktopContact`, `deps.onWebAuthnProxyRefused`, `deps.prepareForUpgrade`, `echo`, `handleAttachmentStream`, `handleAvatarImage`, `handleCookieOriginApprovalRequests`, `handleCookieOriginApprovalResponses`, `handleEvents`, `handleLocalExecRequests`, `handleLocalExecResponses`, `handleWebAuthnRequests`, `handleWebAuthnResponses`, `isAuthorized`, `new URL`, `readBody`, `rejectUntrustedBrowserRequest`, `respondError`, `respondJson`, `routeCommand`, `url2.pathname.slice`, `url2.pathname.startsWith`, `url2.searchParams.get`, `webAuthnProxyRefusal`, `webAuthnProxyRefusalMessage`.

SHA-256 of the source span: `e7f28ace14ccff22dfec3b4dda078a57eec40567db52c31d34efdb061a8b3879`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
