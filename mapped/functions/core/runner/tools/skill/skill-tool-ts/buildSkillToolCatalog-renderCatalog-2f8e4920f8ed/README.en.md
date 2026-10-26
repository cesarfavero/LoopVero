# `buildSkillToolCatalog/renderCatalog`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/skills/README.en.md).

**Module:** `core/runner/tools/skill/skill-tool.ts` · [Module README](../../../../../../../modules/core/runner/tools/skill/skill-tool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:565768-565779](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L565768-L565779) | `ArrowFunctionExpression` | no | `items, omittedNotice` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:565768-565779](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L565768-L565779) | 1 | 0 | 0 | 1 | 0 | 0 |

### evaluation:565768

Calls written directly in this body: `.join`, `items.map`, `searchNudge`.

SHA-256 of the source span: `e2bee2598dd180aabdbc90b284fa1785283ef21658a9cf2ad548f7b6d7dc6cd2`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).
