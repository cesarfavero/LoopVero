# `withStockErrorHint`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/browser-computer/README.en.md).

**Module:** `core/runner/tools/playwright-browser-tools.ts` · [Module README](../../../../../../modules/core/runner/tools/playwright-browser-tools-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:750952-750964](../../../../../../../reference/runtime/host-main.cjs#L750952-L750964) | `FunctionDeclaration` | no | `tool, result, runCodeOffered` |
| [evaluation:523803-523815](../../../../../../../reference/runtime/sand-eval-runner.cjs#L523803-L523815) | `FunctionDeclaration` | no | `tool, result, runCodeOffered` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:750952-750964](../../../../../../../reference/runtime/host-main.cjs#L750952-L750964) | 2 | 0 | 0 | 3 | 0 | 0 |
| [evaluation:523803-523815](../../../../../../../reference/runtime/sand-eval-runner.cjs#L523803-L523815) | 2 | 0 | 0 | 3 | 0 | 0 |

### host:750952

Calls written directly in this body: `hinted.content.push`, `new McpTextContent`, `new McpToolResult`, `new McpToolResultContentItem`, `stockErrorHint`, `success2.clone`, `successOf`.

SHA-256 of the source span: `4f757341a096551c5fbf0cfb01c5d407c9f688ac942c203ed8bc03f9a6a3f0b4`.

### evaluation:523803

Calls written directly in this body: `hinted.content.push`, `new McpTextContent`, `new McpToolResult`, `new McpToolResultContentItem`, `stockErrorHint`, `success2.clone`, `successOf`.

SHA-256 of the source span: `4f757341a096551c5fbf0cfb01c5d407c9f688ac942c203ed8bc03f9a6a3f0b4`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
