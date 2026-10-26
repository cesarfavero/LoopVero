# `recordSkillActivation`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/skills/README.en.md).

**Module:** `core/runner/tools/skill/skill-tool.ts` · [Module README](../../../../../../../modules/core/runner/tools/skill/skill-tool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:565915-565931](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L565915-L565931) | `FunctionDeclaration` | yes | `ctx, deps, skill` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:565915-565931](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L565915-L565931) | 0 | 0 | 2 | 0 | 0 | 0 |

### evaluation:565915

Calls written directly in this body: `.catch`, `.trackSkillUsed`, `getAgentEventTracker`, `getSkillSourceFromPath`, `recordSkillApplied`, `resolveCurrentTurnUserMessageText`, `skillToolName`, `toModelVisibleText`.

SHA-256 of the source span: `956956f924680b5a898df05088f4380d31bfe0f2a093a859c93bcbd50d285ae8`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).
