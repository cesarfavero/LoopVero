# `applySkillCatalogBudget/isProtected`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/prompts/README.en.md).

**Module:** `agent-engine/prompts/skill-catalog-budget.js` · [Module README](../../../../../modules/agent-engine/prompts/skill-catalog-budget-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:639380-639380](../../../../../../reference/runtime/host-main.cjs#L639380-L639380) | `ArrowFunctionExpression` | no | `skill` |
| [evaluation:429970-429970](../../../../../../reference/runtime/sand-eval-runner.cjs#L429970-L429970) | `ArrowFunctionExpression` | no | `skill` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:639380-639380](../../../../../../reference/runtime/host-main.cjs#L639380-L639380) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at host:639380 uses an implicit arrow-function return.
| [evaluation:429970-429970](../../../../../../reference/runtime/sand-eval-runner.cjs#L429970-L429970) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at evaluation:429970 uses an implicit arrow-function return.

### host:639380

Calls written directly in this body: `protectedSkills.has`.

SHA-256 of the source span: `12997e85be4e3d9bc287dc935509224cff8166b6cfb9f962a7ae50c9c2f6a3ee`.

### evaluation:429970

Calls written directly in this body: `protectedSkills.has`.

SHA-256 of the source span: `12997e85be4e3d9bc287dc935509224cff8166b6cfb9f962a7ae50c9c2f6a3ee`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
