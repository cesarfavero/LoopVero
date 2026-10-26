# `respondJson`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/components/gateway/README.en.md).

**Module:** `host/gateway-server.ts` · [Module README](../../../../modules/host/gateway-server-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:493409-493440](../../../../../reference/runtime/host-main.cjs#L493409-L493440) | `FunctionDeclaration` | no | `res, value, req, gzipOptions = {}` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:493409-493440](../../../../../reference/runtime/host-main.cjs#L493409-L493440) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:493409

Calls written directly in this body: `Buffer.from`, `JSON.stringify`, `clientAcceptsGzip`, `respondRaw`.

SHA-256 of the source span: `2b4dd226e74c72bcf2e871be51c919e64e5a095784ce2dc9499fdecda16cec86`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
