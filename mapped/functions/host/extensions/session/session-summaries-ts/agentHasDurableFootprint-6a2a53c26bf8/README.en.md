# `agentHasDurableFootprint`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/context-compaction/README.en.md).

**Module:** `host/extensions/session/session-summaries.ts` · [Module README](../../../../../../modules/host/extensions/session/session-summaries-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:722721-722723](../../../../../../../reference/runtime/host-main.cjs#L722721-L722723) | `FunctionDeclaration` | yes | `agentDir, agentHasMemory` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:722721-722723](../../../../../../../reference/runtime/host-main.cjs#L722721-L722723) | 0 | 0 | 1 | 1 | 0 | 0 |

### host:722721

Calls written directly in this body: `agentHasAutomations`, `agentHasMemory`, `agentHasQuarantinedStoreDb`, `agentHasSkills`.

SHA-256 of the source span: `aa79d5ef798774d992791eeabdedabe30c21f4f7535b3492677e180feacea34e`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
