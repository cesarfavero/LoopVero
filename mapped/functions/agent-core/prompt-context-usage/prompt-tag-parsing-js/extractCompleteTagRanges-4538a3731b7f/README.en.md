# `extractCompleteTagRanges`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/prompts/README.en.md).

**Module:** `agent-core/prompt-context-usage/prompt-tag-parsing.js` · [Module README](../../../../../modules/agent-core/prompt-context-usage/prompt-tag-parsing-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:476139-476141](../../../../../../reference/runtime/host-main.cjs#L476139-L476141) | `FunctionDeclaration` | no | `promptContent, tagName2` |
| [evaluation:255449-255451](../../../../../../reference/runtime/sand-eval-runner.cjs#L255449-L255451) | `FunctionDeclaration` | no | `promptContent, tagName` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:476139-476141](../../../../../../reference/runtime/host-main.cjs#L476139-L476141) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:255449-255451](../../../../../../reference/runtime/sand-eval-runner.cjs#L255449-L255451) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:476139

Calls written directly in this body: `extractCompleteTagRangesMatching`.

SHA-256 of the source span: `002fb47a1f17e96bff8ecbd9f8887e972d612a8e0357269bb52916c6cc3093be`.

### evaluation:255449

Calls written directly in this body: `extractCompleteTagRangesMatching`.

SHA-256 of the source span: `735a1944647bb4f11aceae6668770ad91eec116e17ba3005256c0906c5b21d00`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
