# `requestId`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/components/gateway/README.en.md).

**Module:** `host/gateway-server.ts` · [Module README](../../../../modules/host/gateway-server-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:493518-493522](../../../../../reference/runtime/host-main.cjs#L493518-L493522) | `FunctionDeclaration` | no | `req` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:493518-493522](../../../../../reference/runtime/host-main.cjs#L493518-L493522) | 2 | 0 | 0 | 1 | 0 | 0 |

### host:493518

Calls written directly in this body: `Array.isArray`.

SHA-256 of the source span: `5f413af61a309333ca9d3c5f70d0d1cd7db7376fbcff35a9f8307df4d3dd8bd3`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
