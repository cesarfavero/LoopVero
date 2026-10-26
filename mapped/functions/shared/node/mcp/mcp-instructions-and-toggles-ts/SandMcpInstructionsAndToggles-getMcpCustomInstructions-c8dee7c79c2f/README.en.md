# `SandMcpInstructionsAndToggles.getMcpCustomInstructions`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/integrations/README.en.md).

**Module:** `shared/node/mcp/mcp-instructions-and-toggles.ts` · [Module README](../../../../../../modules/shared/node/mcp/mcp-instructions-and-toggles-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:688565-688582](../../../../../../../reference/runtime/host-main.cjs#L688565-L688582) | `method` | no | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:688565-688582](../../../../../../../reference/runtime/host-main.cjs#L688565-L688582) | 2 | 2 | 0 | 1 | 0 | 0 |

### host:688565

Calls written directly in this body: `.getMcpCustomInstructions`, `.getMcpCustomInstructionsByServerId`, `Object.entries`, `new Map`, `resolveMcpCustomInstruction`, `result.set`, `this.deps.lastAccountDisplayConfig`, `this.deps.settingsStore`.

SHA-256 of the source span: `77e652d7f64fa60e092a966c92b14ac0a330d1b75e513ccb117d873221be643c`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
