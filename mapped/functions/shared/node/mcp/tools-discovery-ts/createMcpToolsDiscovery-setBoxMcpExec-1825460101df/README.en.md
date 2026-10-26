# `createMcpToolsDiscovery/_setBoxMcpExec`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/integrations/README.en.md).

**Module:** `shared/node/mcp/tools-discovery.ts` · [Module README](../../../../../../modules/shared/node/mcp/tools-discovery-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:691475-691479](../../../../../../../reference/runtime/host-main.cjs#L691475-L691479) | `FunctionDeclaration` | no | `next` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:691475-691479](../../../../../../../reference/runtime/host-main.cjs#L691475-L691479) | 0 | 0 | 0 | 0 | 0 | 0 |

### host:691475

Calls written directly in this body: `_invalidateToolsCache`.

Assignment or increment targets: `boxMcpExecSlot`, `lastPushedBoxConfigJson`.

SHA-256 of the source span: `137e7dd6fd9c8a454bb62700e9d0871010f69209e596d5c7ff030d1af883a300`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
