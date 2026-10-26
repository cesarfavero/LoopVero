# `keepRunCodeWarning`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/browser-computer/README.en.md).

**Module:** `core/runner/tools/playwright-browser-tools.ts` · [Module README](../../../../../../modules/core/runner/tools/playwright-browser-tools-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:750893-750908](../../../../../../../reference/runtime/host-main.cjs#L750893-L750908) | `FunctionDeclaration` | no | `{   original,   redacted }` |
| [evaluation:523744-523759](../../../../../../../reference/runtime/sand-eval-runner.cjs#L523744-L523759) | `FunctionDeclaration` | no | `{   original,   redacted }` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:750893-750908](../../../../../../../reference/runtime/host-main.cjs#L750893-L750908) | 2 | 0 | 0 | 3 | 0 | 0 |
| [evaluation:523744-523759](../../../../../../../reference/runtime/sand-eval-runner.cjs#L523744-L523759) | 2 | 0 | 0 | 3 | 0 | 0 |

### host:750893

Calls written directly in this body: `.includes`, `hinted.content.push`, `keptRunCodeWarning`, `new McpTextContent`, `new McpToolResult`, `new McpToolResultContentItem`, `success2.clone`, `successOf`, `textOf`.

SHA-256 of the source span: `f72d4ef4daf4315f8d2e0e4e604e5f1173856ffa53de7a3a0b107f03a8d74786`.

### evaluation:523744

Calls written directly in this body: `.includes`, `hinted.content.push`, `keptRunCodeWarning`, `new McpTextContent`, `new McpToolResult`, `new McpToolResultContentItem`, `success2.clone`, `successOf`, `textOf2`.

SHA-256 of the source span: `96ae3e15fa1cb46675836457bcb87bcf0596ffb82a3102350259396401e9d4c1`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
