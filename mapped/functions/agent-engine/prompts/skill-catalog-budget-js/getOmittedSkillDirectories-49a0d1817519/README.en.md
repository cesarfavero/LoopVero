# `getOmittedSkillDirectories`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/prompts/README.en.md).

**Module:** `agent-engine/prompts/skill-catalog-budget.js` · [Module README](../../../../../modules/agent-engine/prompts/skill-catalog-budget-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:639553-639562](../../../../../../reference/runtime/host-main.cjs#L639553-L639562) | `FunctionDeclaration` | no | `skills` |
| [evaluation:430167-430176](../../../../../../reference/runtime/sand-eval-runner.cjs#L430167-L430176) | `FunctionDeclaration` | no | `skills` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:639553-639562](../../../../../../reference/runtime/host-main.cjs#L639553-L639562) | 1 | 1 | 0 | 1 | 0 | 0 |
| [evaluation:430167-430176](../../../../../../reference/runtime/sand-eval-runner.cjs#L430167-L430176) | 1 | 1 | 0 | 1 | 0 | 0 |

### host:639553

Calls written directly in this body: `directories.add`, `getSkillDirectoryHint`, `new Set`.

SHA-256 of the source span: `c627c356f7a9c1794323fdd77c224cb0d67e1a0aa337fdc88de79ada846d86a7`.

### evaluation:430167

Calls written directly in this body: `directories.add`, `getSkillDirectoryHint`, `new Set`.

SHA-256 of the source span: `c627c356f7a9c1794323fdd77c224cb0d67e1a0aa337fdc88de79ada846d86a7`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
