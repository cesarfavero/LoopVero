# `SandMcpManager.noteAuthCallbackReceived`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/integrations/README.en.md).

**Module:** `shared/node/mcp/mcp-manager.ts` · [Module README](../../../../../../modules/shared/node/mcp/mcp-manager-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:690159-690161](../../../../../../../reference/runtime/host-main.cjs#L690159-L690161) | `method` | yes | `hint` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:690159-690161](../../../../../../../reference/runtime/host-main.cjs#L690159-L690161) | 0 | 0 | 1 | 1 | 0 | 0 |

### host:690159

Calls written directly in this body: `this.authWatches.noteAuthCallbackReceived`.

SHA-256 of the source span: `d441b59229c89920afbb4075ed4c3bed97d3514d18874318a7687c693d99f6f6`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
