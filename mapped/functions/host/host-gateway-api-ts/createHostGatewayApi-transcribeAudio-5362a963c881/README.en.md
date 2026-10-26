# `createHostGatewayApi/transcribeAudio`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/components/gateway/README.en.md).

**Module:** `host/host-gateway-api.ts` · [Module README](../../../../modules/host/host-gateway-api-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:492876-492880](../../../../../reference/runtime/host-main.cjs#L492876-L492880) | `ArrowFunctionExpression` | no | `{ audioBase64, mimeType, language: language2 }` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:492876-492880](../../../../../reference/runtime/host-main.cjs#L492876-L492880) | 1 | 0 | 0 | 0 | 0 | 0 |

The occurrence at host:492876 uses an implicit arrow-function return.

### host:492876

Calls written directly in this body: `.transcribeAudio`, `Buffer.from`, `deps.extensions.api`, `new Uint8Array`.

SHA-256 of the source span: `a9c8186e94015eca06c9aac09cd300bdc43c604a654040a7e9527ca968c134d8`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
