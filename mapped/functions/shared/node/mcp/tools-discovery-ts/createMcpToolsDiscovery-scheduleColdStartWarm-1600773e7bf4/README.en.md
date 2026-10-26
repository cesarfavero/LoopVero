# `createMcpToolsDiscovery/_scheduleColdStartWarm`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/integrations/README.en.md).

**Module:** `shared/node/mcp/tools-discovery.ts` · [Module README](../../../../../../modules/shared/node/mcp/tools-discovery-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:691043-691052](../../../../../../../reference/runtime/host-main.cjs#L691043-L691052) | `FunctionDeclaration` | no | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:691043-691052](../../../../../../../reference/runtime/host-main.cjs#L691043-L691052) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:691043

Calls written directly in this body: `.finally`, `_warmToolsCache`.

Assignment or increment targets: `toolsColdWarmScheduled`.

SHA-256 of the source span: `7bacdab4f405a81a7880332eaeb3632b2daf1dff11c73c1868642dfaaa805465`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
