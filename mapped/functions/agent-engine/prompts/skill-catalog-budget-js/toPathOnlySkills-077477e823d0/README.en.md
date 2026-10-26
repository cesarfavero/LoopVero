# `toPathOnlySkills`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/prompts/README.en.md).

**Module:** `agent-engine/prompts/skill-catalog-budget.js` · [Module README](../../../../../modules/agent-engine/prompts/skill-catalog-budget-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:639452-639454](../../../../../../reference/runtime/host-main.cjs#L639452-L639454) | `FunctionDeclaration` | no | `skills, isProtected` |
| [evaluation:430042-430044](../../../../../../reference/runtime/sand-eval-runner.cjs#L430042-L430044) | `FunctionDeclaration` | no | `skills, isProtected` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:639452-639454](../../../../../../reference/runtime/host-main.cjs#L639452-L639454) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:430042-430044](../../../../../../reference/runtime/sand-eval-runner.cjs#L430042-L430044) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:639452

Calls written directly in this body: `skills.map`.

SHA-256 of the source span: `1bd697a749182206dcc1d7fa921fd871951aaf1e1eaacead2e1e6c5e160d0047`.

### evaluation:430042

Calls written directly in this body: `skills.map`.

SHA-256 of the source span: `1bd697a749182206dcc1d7fa921fd871951aaf1e1eaacead2e1e6c5e160d0047`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
