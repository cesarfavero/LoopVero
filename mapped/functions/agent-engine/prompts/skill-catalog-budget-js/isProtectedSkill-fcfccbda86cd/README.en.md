# `isProtectedSkill`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/prompts/README.en.md).

**Module:** `agent-engine/prompts/skill-catalog-budget.js` · [Module README](../../../../../modules/agent-engine/prompts/skill-catalog-budget-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:639542-639545](../../../../../../reference/runtime/host-main.cjs#L639542-L639545) | `FunctionDeclaration` | no | `skill` |
| [evaluation:430156-430159](../../../../../../reference/runtime/sand-eval-runner.cjs#L430156-L430159) | `FunctionDeclaration` | no | `skill` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:639542-639545](../../../../../../reference/runtime/host-main.cjs#L639542-L639545) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:430156-430159](../../../../../../reference/runtime/sand-eval-runner.cjs#L430156-L430159) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:639542

Calls written directly in this body: `PROTECTED_SKILL_NAMES.has`, `PROTECTED_SKILL_NAME_PREFIXES.some`, `skillNameFromPath`.

SHA-256 of the source span: `441214254f9df5577b58c3e66f7df69b7dc07145434bc97abdb47913dd20c4bd`.

### evaluation:430156

Calls written directly in this body: `PROTECTED_SKILL_NAMES.has`, `PROTECTED_SKILL_NAME_PREFIXES.some`, `skillNameFromPath`.

SHA-256 of the source span: `441214254f9df5577b58c3e66f7df69b7dc07145434bc97abdb47913dd20c4bd`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
