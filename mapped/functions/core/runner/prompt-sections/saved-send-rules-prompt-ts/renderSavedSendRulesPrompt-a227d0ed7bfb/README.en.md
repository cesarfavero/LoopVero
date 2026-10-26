# `renderSavedSendRulesPrompt`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/prompts/README.en.md).

**Module:** `core/runner/prompt-sections/saved-send-rules-prompt.ts` · [Module README](../../../../../../modules/core/runner/prompt-sections/saved-send-rules-prompt-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:538482-538503](../../../../../../../reference/runtime/sand-eval-runner.cjs#L538482-L538503) | `FunctionDeclaration` | no | `allowRules, options2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:538482-538503](../../../../../../../reference/runtime/sand-eval-runner.cjs#L538482-L538503) | 4 | 1 | 0 | 2 | 0 | 0 |

### evaluation:538482

Calls written directly in this body: `.filter`, `.join`, `JSON.stringify`, `allowRules.map`, `listed.push`, `rules.slice`.

Assignment or increment targets: `chars`.

SHA-256 of the source span: `17d50f3114fd00672f9a8e4a65eddaec2d46bbae1073f1dbe2bdb9cb22f5cad9`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
