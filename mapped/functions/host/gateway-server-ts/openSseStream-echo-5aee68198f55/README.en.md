# `openSseStream/echo`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/components/gateway/README.en.md).

**Module:** `host/gateway-server.ts` · [Module README](../../../../modules/host/gateway-server-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:493602-493606](../../../../../reference/runtime/host-main.cjs#L493602-L493606) | `ArrowFunctionExpression` | no | `nonce` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:493602-493606](../../../../../reference/runtime/host-main.cjs#L493602-L493606) | 0 | 0 | 0 | 0 | 0 | 0 |

### host:493602

Calls written directly in this body: `sink.write`.

SHA-256 of the source span: `96d7f585e9b964fd348ae7aaa2d58721109b5b85968721922e51f50dc8b10e91`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
