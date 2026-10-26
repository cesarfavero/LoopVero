# `handleAttachmentStream`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/components/gateway/README.en.md).

**Module:** `host/gateway-server.ts` · [Module README](../../../../modules/host/gateway-server-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:493700-493753](../../../../../reference/runtime/host-main.cjs#L493700-L493753) | `FunctionDeclaration` | yes | `deps, req, res, url2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:493700-493753](../../../../../reference/runtime/host-main.cjs#L493700-L493753) | 12 | 1 | 3 | 6 | 1 | 1 |

### host:493700

Calls written directly in this body: `Buffer.alloc`, `Buffer.from`, `Math.min`, `decodeURIComponent`, `parseAgentId`, `parseGatewayByteRange`, `probe.mime.startsWith`, `read2`, `res.destroy`, `res.end`, `res.write`, `res.writeHead`, `respondError`, `responseDrained`, `url2.pathname.slice`, `url2.searchParams.get`.

Assignment or increment targets: `offset2`.

Explicit throw targets: `error64`.

SHA-256 of the source span: `ff8189fe807888a44dc82df44ab79e21119d70503f24cf9706de1278b5bd0d4e`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
