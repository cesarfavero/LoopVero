# `parseGatewayByteRange`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/components/gateway/README.en.md).

**Module:** `host/gateway-byte-range.ts` · [Module README](../../../../modules/host/gateway-byte-range-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:488887-488903](../../../../../reference/runtime/host-main.cjs#L488887-L488903) | `FunctionDeclaration` | no | `header, totalSize` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:488887-488903](../../../../../reference/runtime/host-main.cjs#L488887-L488903) | 8 | 0 | 0 | 7 | 0 | 0 |

### host:488887

Calls written directly in this body: `Math.max`, `Math.min`, `Number`, `SINGLE_BYTE_RANGE.exec`, `header.trim`.

SHA-256 of the source span: `cbeecf3af2d1dafa7e45ceff087ee5485e595da026b8f1fd2430ec696593c297`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
