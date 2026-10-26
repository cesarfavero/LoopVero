# `parseSubscribedChannels`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/components/gateway/README.en.md).

**Module:** `host/gateway-server.ts` · [Module README](../../../../modules/host/gateway-server-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:493615-493623](../../../../../reference/runtime/host-main.cjs#L493615-L493623) | `FunctionDeclaration` | no | `url2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:493615-493623](../../../../../reference/runtime/host-main.cjs#L493615-L493623) | 2 | 0 | 0 | 2 | 0 | 0 |

### host:493615

Calls written directly in this body: `.flatMap`, `new Set`, `raw.split`, `url2.searchParams.get`.

SHA-256 of the source span: `5b6b0c8fa33ae20a67266d5c91c47bbdc720c93707dbbf3754bf2bcd08230b19`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
