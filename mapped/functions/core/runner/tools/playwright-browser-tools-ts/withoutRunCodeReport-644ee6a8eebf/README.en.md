# `withoutRunCodeReport`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/browser-computer/README.en.md).

**Module:** `core/runner/tools/playwright-browser-tools.ts` · [Module README](../../../../../../modules/core/runner/tools/playwright-browser-tools-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:750735-750792](../../../../../../../reference/runtime/host-main.cjs#L750735-L750792) | `FunctionDeclaration` | no | `result` |
| [evaluation:523586-523643](../../../../../../../reference/runtime/sand-eval-runner.cjs#L523586-L523643) | `FunctionDeclaration` | no | `result` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:750735-750792](../../../../../../../reference/runtime/host-main.cjs#L750735-L750792) | 6 | 0 | 0 | 5 | 0 | 1 |
| [evaluation:523586-523643](../../../../../../../reference/runtime/sand-eval-runner.cjs#L523586-L523643) | 6 | 0 | 0 | 5 | 0 | 1 |

### host:750735

Calls written directly in this body: `JSON.parse`, `blocksJoinedByMcpServer.join`, `isUnknownRecord2`, `item.content.value.text.split`, `new McpTextContent`, `new McpToolResult`, `new McpToolResultContentItem`, `pageTextJson`, `reportedBoxImageSha`, `reportedFileChooserSchema.safeParse`, `reportedFileUpload`, `reportedImagesSchema.safeParse`, `reportedRootlessUnavailable`, `reportedSleepSchema.safeParse`, `reportedWorkerIsolation`, `stripped.content.splice`, `success2.clone`, `success2.content.findIndex`, `successOf`.

Assignment or increment targets: `parsed2`, `strippedItem.content.value.text`.

SHA-256 of the source span: `5dd40e69f8375b51e5d3e9c120bec8d0ea125e04e7cd909ff03a4dbba04c82af`.

### evaluation:523586

Calls written directly in this body: `JSON.parse`, `blocksJoinedByMcpServer.join`, `isUnknownRecord2`, `item.content.value.text.split`, `new McpTextContent`, `new McpToolResult`, `new McpToolResultContentItem`, `pageTextJson`, `reportedBoxImageSha`, `reportedFileChooserSchema.safeParse`, `reportedFileUpload`, `reportedImagesSchema.safeParse`, `reportedRootlessUnavailable`, `reportedSleepSchema.safeParse`, `reportedWorkerIsolation`, `stripped.content.splice`, `success2.clone`, `success2.content.findIndex`, `successOf`.

Assignment or increment targets: `parsed`, `strippedItem.content.value.text`.

SHA-256 of the source span: `910010e4b1b8611fc15d76c31a83a1add07191f6d366cde6dca7b3ba2718ea6e`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
