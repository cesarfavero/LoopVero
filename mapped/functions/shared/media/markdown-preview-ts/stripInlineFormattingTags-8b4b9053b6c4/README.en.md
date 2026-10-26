# `stripInlineFormattingTags`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `shared/media/markdown-preview.ts` · [Module README](../../../../../modules/shared/media/markdown-preview-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:722055-722093](../../../../../../reference/runtime/host-main.cjs#L722055-L722093) | `FunctionDeclaration` | no | `input2` |
| [evaluation:540032-540070](../../../../../../reference/runtime/sand-eval-runner.cjs#L540032-L540070) | `FunctionDeclaration` | no | `input2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:722055-722093](../../../../../../reference/runtime/host-main.cjs#L722055-L722093) | 8 | 2 | 0 | 3 | 0 | 0 |
| [evaluation:540032-540070](../../../../../../reference/runtime/sand-eval-runner.cjs#L540032-L540070) | 8 | 2 | 0 | 3 | 0 | 0 |

### host:722055

Calls written directly in this body: `INLINE_FORMATTING_TAGS.has`, `VOID_INLINE_FORMATTING_TAGS.has`, `codeSpanRanges`, `fencedBlockRanges`, `input2.includes`, `input2.matchAll`, `input2.slice`, `insideRanges`, `match2[computed].toLowerCase`, `openTags.at`, `openTags.pop`, `openTags.push`, `removals.push`, `removals.sort`.

Assignment or increment targets: `cursor`, `output2`.

SHA-256 of the source span: `b9be229692e50e1b9bdc36a7b770da035f0a18982cae31462da4755f93c9d839`.

### evaluation:540032

Calls written directly in this body: `INLINE_FORMATTING_TAGS.has`, `VOID_INLINE_FORMATTING_TAGS.has`, `codeSpanRanges`, `fencedBlockRanges`, `input2.includes`, `input2.matchAll`, `input2.slice`, `insideRanges`, `match2[computed].toLowerCase`, `openTags.at`, `openTags.pop`, `openTags.push`, `removals.push`, `removals.sort`.

Assignment or increment targets: `cursor`, `output2`.

SHA-256 of the source span: `b9be229692e50e1b9bdc36a7b770da035f0a18982cae31462da4755f93c9d839`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
