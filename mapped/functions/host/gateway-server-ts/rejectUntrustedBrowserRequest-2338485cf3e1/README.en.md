# `rejectUntrustedBrowserRequest`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/components/gateway/README.en.md).

**Module:** `host/gateway-server.ts` · [Module README](../../../../modules/host/gateway-server-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:493504-493517](../../../../../reference/runtime/host-main.cjs#L493504-L493517) | `FunctionDeclaration` | no | `deps, req, res` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:493504-493517](../../../../../reference/runtime/host-main.cjs#L493504-L493517) | 3 | 0 | 0 | 3 | 0 | 0 |

### host:493504

Calls written directly in this body: `hostHeaderHostname`, `isLoopbackHostname`, `respondError`.

SHA-256 of the source span: `c0cfb3c1ef11473bb683cdcb1501129d2e6a22c3d4290d12ab3b0ada5c33f35f`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
