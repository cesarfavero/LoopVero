# `withDeviceTrustDenial`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/browser-computer/README.en.md).

**Module:** `core/runner/tools/playwright-browser-tools.ts` · [Module README](../../../../../../modules/core/runner/tools/playwright-browser-tools-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:750830-750845](../../../../../../../reference/runtime/host-main.cjs#L750830-L750845) | `FunctionDeclaration` | no | `result` |
| [evaluation:523681-523696](../../../../../../../reference/runtime/sand-eval-runner.cjs#L523681-L523696) | `FunctionDeclaration` | no | `result` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:750830-750845](../../../../../../../reference/runtime/host-main.cjs#L750830-L750845) | 3 | 0 | 0 | 4 | 0 | 0 |
| [evaluation:523681-523696](../../../../../../../reference/runtime/sand-eval-runner.cjs#L523681-L523696) | 3 | 0 | 0 | 4 | 0 | 0 |

### host:750830

Calls written directly in this body: `annotateWorkspaceDeviceTrustDenial`, `annotated2.slice`, `hinted.content.push`, `new McpTextContent`, `new McpToolResult`, `new McpToolResultContentItem`, `note.trim`, `success2.clone`, `successOf`, `textOf`.

SHA-256 of the source span: `14a2ff240155f6b9a2ea3332f7e3ba23fd545d3bb7e8e3cfec10ec7e9e072160`.

### evaluation:523681

Calls written directly in this body: `annotateWorkspaceDeviceTrustDenial`, `annotated2.slice`, `hinted.content.push`, `new McpTextContent`, `new McpToolResult`, `new McpToolResultContentItem`, `note.trim`, `success2.clone`, `successOf`, `textOf2`.

SHA-256 of the source span: `0f0c76d6e3703117100c3c520a8b45245a432b7e7aaf90fddffe3a3f7f8748f1`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
