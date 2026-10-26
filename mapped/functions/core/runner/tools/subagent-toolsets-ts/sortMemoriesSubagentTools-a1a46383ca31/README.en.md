# `sortMemoriesSubagentTools`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/subagents/README.en.md).

**Module:** `core/runner/tools/subagent-toolsets.ts` · [Module README](../../../../../../modules/core/runner/tools/subagent-toolsets-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:582491-582520](../../../../../../../reference/runtime/sand-eval-runner.cjs#L582491-L582520) | `FunctionDeclaration` | no | `host` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:582491-582520](../../../../../../../reference/runtime/sand-eval-runner.cjs#L582491-L582520) | 2 | 0 | 0 | 1 | 0 | 0 |

### evaluation:582491

Calls written directly in this body: `.filter`, `createSandSplitStateTools`, `createSortMemoriesTool`, `recallMemoryTools`, `scopes.userBot.listMemories`, `tools.push`.

SHA-256 of the source span: `36acd5355a6ff5605b6d7e6d2e35b68140959ba9eac1b142ca93bef53c788e41`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
