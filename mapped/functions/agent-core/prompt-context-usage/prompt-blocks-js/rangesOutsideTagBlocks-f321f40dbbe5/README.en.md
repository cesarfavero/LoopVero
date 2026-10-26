# `rangesOutsideTagBlocks`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/prompts/README.en.md).

**Module:** `agent-core/prompt-context-usage/prompt-blocks.js` · [Module README](../../../../../modules/agent-core/prompt-context-usage/prompt-blocks-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:476178-476191](../../../../../../reference/runtime/host-main.cjs#L476178-L476191) | `FunctionDeclaration` | no | `text3, matchesStrippedTag` |
| [evaluation:255488-255501](../../../../../../reference/runtime/sand-eval-runner.cjs#L255488-L255501) | `FunctionDeclaration` | no | `text3, matchesStrippedTag` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:476178-476191](../../../../../../reference/runtime/host-main.cjs#L476178-L476191) | 2 | 1 | 0 | 1 | 0 | 0 |
| [evaluation:255488-255501](../../../../../../reference/runtime/sand-eval-runner.cjs#L255488-L255501) | 2 | 1 | 0 | 1 | 0 | 0 |

### host:476178

Calls written directly in this body: `extractCompleteTagRangesMatching`, `kept.push`, `selectOutermostRanges`.

Assignment or increment targets: `cursor`.

SHA-256 of the source span: `e42de36a0402c368f8ef1545eb6f24b25b7f73e9f8bec272774c85abbe936faa`.

### evaluation:255488

Calls written directly in this body: `extractCompleteTagRangesMatching`, `kept.push`, `selectOutermostRanges`.

Assignment or increment targets: `cursor`.

SHA-256 of the source span: `e42de36a0402c368f8ef1545eb6f24b25b7f73e9f8bec272774c85abbe936faa`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
