# `extractCompleteTagRangesMatching`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/prompts/README.en.md).

**Module:** `agent-core/prompt-context-usage/prompt-tag-parsing.js` · [Module README](../../../../../modules/agent-core/prompt-context-usage/prompt-tag-parsing-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:476107-476138](../../../../../../reference/runtime/host-main.cjs#L476107-L476138) | `FunctionDeclaration` | no | `promptContent, matches` |
| [evaluation:255417-255448](../../../../../../reference/runtime/sand-eval-runner.cjs#L255417-L255448) | `FunctionDeclaration` | no | `promptContent, matches` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:476107-476138](../../../../../../reference/runtime/host-main.cjs#L476107-L476138) | 4 | 1 | 0 | 1 | 0 | 0 |
| [evaluation:255417-255448](../../../../../../reference/runtime/sand-eval-runner.cjs#L255417-L255448) | 4 | 1 | 0 | 1 | 0 | 0 |

### host:476107

Calls written directly in this body: `findOpenTagEnd`, `matches`, `openTagPattern.exec`, `promptContent.indexOf`, `ranges.push`.

Assignment or increment targets: `openTagPattern.lastIndex`, `searchStart`.

SHA-256 of the source span: `797f403c87a43d515c3c54072f9f331f9545ce0d1e722cac1e1739474a656164`.

### evaluation:255417

Calls written directly in this body: `findOpenTagEnd`, `matches`, `openTagPattern.exec`, `promptContent.indexOf`, `ranges.push`.

Assignment or increment targets: `openTagPattern.lastIndex`, `searchStart`.

SHA-256 of the source span: `3a224389634e929fb2e3b368f4c1f7fc75ce7e51178fbaa16382369ab981f7d0`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
