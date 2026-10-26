# `SandMcpManager.noteAuthCompletedElsewhere`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/integrations/README.en.md).

**Module:** `shared/node/mcp/mcp-manager.ts` · [Module README](../../../../../../modules/shared/node/mcp/mcp-manager-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:690156-690158](../../../../../../../reference/runtime/host-main.cjs#L690156-L690158) | `method` | no | `rawServerId, rawAccountKey` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:690156-690158](../../../../../../../reference/runtime/host-main.cjs#L690156-L690158) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:690156

Calls written directly in this body: `this.authWatches.noteAuthCompletedElsewhere`.

SHA-256 of the source span: `b5c622819e23f370eb1ad84ec545b0f726ddf5e9e80344ab062309de30fae396`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
