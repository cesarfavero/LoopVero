# `createHostGatewayApi/markAgentRequestEnded`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/components/gateway/README.en.md).

**Module:** `host/host-gateway-api.ts` · [Module README](../../../../modules/host/host-gateway-api-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:493010-493010](../../../../../reference/runtime/host-main.cjs#L493010-L493010) | `ArrowFunctionExpression` | yes | `{ requestId: requestId2 }` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:493010-493010](../../../../../reference/runtime/host-main.cjs#L493010-L493010) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at host:493010 uses an implicit arrow-function return.

### host:493010

Calls written directly in this body: `.markAgentRequestEnded`, `deps.extensions.api`.

SHA-256 of the source span: `abbd793eb0e01a7bc564e2902524c11525fcfc8ff8050adb8bbecf71e7907228`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
