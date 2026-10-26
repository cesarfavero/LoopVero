# `visitValue`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/prompts/README.en.md).

**Module:** `agent-core/prompt-context-usage/prompt-context-parts.js` · [Module README](../../../../../modules/agent-core/prompt-context-usage/prompt-context-parts-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:476345-476365](../../../../../../reference/runtime/host-main.cjs#L476345-L476365) | `FunctionDeclaration` | no | `scope, value` |
| [evaluation:255655-255675](../../../../../../reference/runtime/sand-eval-runner.cjs#L255655-L255675) | `FunctionDeclaration` | no | `scope, value` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:476345-476365](../../../../../../reference/runtime/host-main.cjs#L476345-L476365) | 5 | 2 | 0 | 2 | 0 | 0 |
| [evaluation:255655-255675](../../../../../../reference/runtime/sand-eval-runner.cjs#L255655-L255675) | 5 | 2 | 0 | 2 | 0 | 0 |

### host:476345

Calls written directly in this body: `extractCompleteTagRangesMatching`, `initialPromptBlocks`, `rangesOutsideTagBlocks`, `selectOutermostRanges`, `visitPart`, `wholeText`.

SHA-256 of the source span: `35654968fce18c17e88c0061eca20c4c73532e36f422cf25bb7d533b2bda42a9`.

### evaluation:255655

Calls written directly in this body: `extractCompleteTagRangesMatching`, `initialPromptBlocks`, `rangesOutsideTagBlocks`, `selectOutermostRanges`, `visitPart`, `wholeText`.

SHA-256 of the source span: `35654968fce18c17e88c0061eca20c4c73532e36f422cf25bb7d533b2bda42a9`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
