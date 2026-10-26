# `withInlineImages`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/browser-computer/README.en.md).

**Module:** `core/runner/tools/playwright-browser-tools.ts` · [Module README](../../../../../../modules/core/runner/tools/playwright-browser-tools-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:750988-751026](../../../../../../../reference/runtime/host-main.cjs#L750988-L751026) | `FunctionDeclaration` | yes | `ctx, result, source` |
| [evaluation:523839-523877](../../../../../../../reference/runtime/sand-eval-runner.cjs#L523839-L523877) | `FunctionDeclaration` | yes | `ctx, result, source` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:750988-751026](../../../../../../../reference/runtime/host-main.cjs#L750988-L751026) | 7 | 1 | 1 | 3 | 0 | 0 |
| [evaluation:523839-523877](../../../../../../../reference/runtime/sand-eval-runner.cjs#L523839-L523877) | 7 | 1 | 1 | 3 | 0 | 0 |

### host:750988

Calls written directly in this body: `attached.content.find`, `boundInlineImageForModel`, `content.push`, `link.content.value.text.replace`, `new McpTextContent`, `new McpToolResult`, `new McpToolResultContentItem`, `new Uint8Array`, `readImageSize2`, `scaledImageNote`, `success2.clone`, `success2.content.some`, `successOf`, `withComputerUseSubagentSavedImageSentence`.

Assignment or increment targets: `attached.content`, `item.content.value.data`, `item.content.value.mimeType`, `item.content.value.text`, `link.content.value.text`.

SHA-256 of the source span: `414ea5deda90f019a1aaddd9548c6a5d63adc592776e4660af619e93c3ba1443`.

### evaluation:523839

Calls written directly in this body: `attached.content.find`, `boundInlineImageForModel`, `content.push`, `link.content.value.text.replace`, `new McpTextContent`, `new McpToolResult`, `new McpToolResultContentItem`, `new Uint8Array`, `readImageSize`, `scaledImageNote`, `success2.clone`, `success2.content.some`, `successOf`, `withComputerUseSubagentSavedImageSentence`.

Assignment or increment targets: `attached.content`, `item.content.value.data`, `item.content.value.mimeType`, `item.content.value.text`, `link.content.value.text`.

SHA-256 of the source span: `b661653c86387b6e2a62be256aefb89be5e464253a87705da1e29890adec49d3`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
