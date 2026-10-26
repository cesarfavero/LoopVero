# `sharePassSubagentTools`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/subagents/README.en.md).

**Module:** `core/runner/tools/subagent-toolsets.ts` · [Module README](../../../../../../modules/core/runner/tools/subagent-toolsets-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:582531-582537](../../../../../../../reference/runtime/sand-eval-runner.cjs#L582531-L582537) | `FunctionDeclaration` | no | `host` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:582531-582537](../../../../../../../reference/runtime/sand-eval-runner.cjs#L582531-L582537) | 4 | 0 | 0 | 5 | 0 | 0 |

### evaluation:582531

Calls written directly in this body: `carryOverSubagentTools`, `isCarryOverSubagentType`, `isSkillsSubagentType`, `isSortMemoriesSubagentType`, `skillsSubagentTools`, `sortMemoriesSubagentTools`.

SHA-256 of the source span: `9f6d436b1bfd5eb3b089ec31051a49a693a9d01196542e66ab7070720dca89e1`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
