# `omitSkillsToFit/renderRetaining`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/prompts/README.en.md).

**Module:** `agent-engine/prompts/skill-catalog-budget.js` · [Module README](../../../../../modules/agent-engine/prompts/skill-catalog-budget-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:639492-639516](../../../../../../reference/runtime/host-main.cjs#L639492-L639516) | `ArrowFunctionExpression` | no | `retainedDroppableCount` |
| [evaluation:430106-430130](../../../../../../reference/runtime/sand-eval-runner.cjs#L430106-L430130) | `ArrowFunctionExpression` | no | `retainedDroppableCount` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:639492-639516](../../../../../../reference/runtime/host-main.cjs#L639492-L639516) | 3 | 1 | 0 | 1 | 0 | 0 |
| [evaluation:430106-430130](../../../../../../reference/runtime/sand-eval-runner.cjs#L430106-L430130) | 3 | 1 | 0 | 1 | 0 | 0 |

### host:639492

Calls written directly in this body: `estimateStringTokenCount`, `getOmittedSkillDirectories`, `isProtected`, `omittedSkills.push`, `renderContent`, `renderOmittedNotice`, `renderSection`, `retainedSkills.push`.

Assignment or increment targets: `i`.

SHA-256 of the source span: `22e86c8428d80c2863711a9638979865325873a75bdbca4cec5f1a69c6b9f563`.

### evaluation:430106

Calls written directly in this body: `estimateStringTokenCount`, `getOmittedSkillDirectories`, `isProtected`, `omittedSkills.push`, `renderContent`, `renderOmittedNotice`, `renderSection`, `retainedSkills.push`.

Assignment or increment targets: `i`.

SHA-256 of the source span: `22e86c8428d80c2863711a9638979865325873a75bdbca4cec5f1a69c6b9f563`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
