# `handleAvatarImage`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/components/gateway/README.en.md).

**Module:** `host/gateway-server.ts` · [Module README](../../../../modules/host/gateway-server-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:493650-493684](../../../../../reference/runtime/host-main.cjs#L493650-L493684) | `FunctionDeclaration` | yes | `deps, req, res, url2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:493650-493684](../../../../../reference/runtime/host-main.cjs#L493650-L493684) | 7 | 0 | 1 | 5 | 0 | 0 |

### host:493650

Calls written directly in this body: `Buffer.from`, `DATA_URL_PATTERN.exec`, `decodeURIComponent`, `deps.api.getAgentAvatar`, `parseAgentId`, `res.end`, `res.writeHead`, `respondError`, `url2.pathname.slice`, `url2.searchParams.get`.

SHA-256 of the source span: `5f4922495d58f469ae7c23b7cfff51b552364f747d096f969dad83178c465f76`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
