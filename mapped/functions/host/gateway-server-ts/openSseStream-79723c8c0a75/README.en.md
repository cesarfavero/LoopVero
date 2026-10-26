# `openSseStream`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/components/gateway/README.en.md).

**Module:** `host/gateway-server.ts` · [Module README](../../../../modules/host/gateway-server-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:493580-493614](../../../../../reference/runtime/host-main.cjs#L493580-L493614) | `FunctionDeclaration` | no | `deps, req, res, register, echoes` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:493580-493614](../../../../../reference/runtime/host-main.cjs#L493580-L493614) | 3 | 0 | 0 | 0 | 0 | 0 |

### host:493580

Calls written directly in this body: `clientAcceptsGzip`, `echoes.add`, `gzip6.pipe`, `register`, `res.on`, `res.writeHead`, `sink.write`, `sseHeartbeatPolicy.arm`.

SHA-256 of the source span: `be203b310eede605d0cc39c55580120b3a0d98ac8744ce783e095edc0a9d8d36`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
