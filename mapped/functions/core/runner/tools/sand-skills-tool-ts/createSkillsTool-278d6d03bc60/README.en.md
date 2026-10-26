# `createSkillsTool`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/skills/README.en.md).

**Module:** `core/runner/tools/sand-skills-tool.ts` · [Module README](../../../../../../modules/core/runner/tools/sand-skills-tool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:536032-536047](../../../../../../../reference/runtime/sand-eval-runner.cjs#L536032-L536047) | `FunctionDeclaration` | no | `deps` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:536032-536047](../../../../../../../reference/runtime/sand-eval-runner.cjs#L536032-L536047) | 0 | 0 | 0 | 1 | 0 | 0 |

### evaluation:536032

Calls written directly in this body: `SAND_SKILLS_SUGGESTIONS_MAX.toString`, `defineCommunicateTool`.

SHA-256 of the source span: `af2f80ede38d4d5e5dec9888139e0435267cbc9725bc898ebd48603ade1503d4`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
