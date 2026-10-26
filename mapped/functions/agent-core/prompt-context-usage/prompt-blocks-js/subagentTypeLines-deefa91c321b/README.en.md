# `subagentTypeLines`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/prompts/README.en.md).

**Module:** `agent-core/prompt-context-usage/prompt-blocks.js` · [Module README](../../../../../modules/agent-core/prompt-context-usage/prompt-blocks-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:476164-476177](../../../../../../reference/runtime/host-main.cjs#L476164-L476177) | `FunctionDeclaration` | no | `text3` |
| [evaluation:255474-255487](../../../../../../reference/runtime/sand-eval-runner.cjs#L255474-L255487) | `FunctionDeclaration` | no | `text3` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:476164-476177](../../../../../../reference/runtime/host-main.cjs#L476164-L476177) | 1 | 1 | 0 | 1 | 0 | 0 |
| [evaluation:255474-255487](../../../../../../reference/runtime/sand-eval-runner.cjs#L255474-L255487) | 1 | 1 | 0 | 1 | 0 | 0 |

### host:476164

Calls written directly in this body: `SUBAGENT_TYPE_LINE_PATTERN.exec`, `line.trim`, `line.trimStart`, `lines2.push`, `text3.split`.

Assignment or increment targets: `lineStart`.

SHA-256 of the source span: `51e51d483539fa0cd8498aa777b318a94589f6ba99b8116d823b92270e7893f6`.

### evaluation:255474

Calls written directly in this body: `SUBAGENT_TYPE_LINE_PATTERN.exec`, `line.trim`, `line.trimStart`, `lines2.push`, `text3.split`.

Assignment or increment targets: `lineStart`.

SHA-256 of the source span: `51e51d483539fa0cd8498aa777b318a94589f6ba99b8116d823b92270e7893f6`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
