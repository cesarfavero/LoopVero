# `withSilentSuccessText`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/browser-computer/README.en.md).

**Module:** `core/runner/tools/playwright-browser-tools.ts` · [Module README](../../../../../../modules/core/runner/tools/playwright-browser-tools-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:751027-751045](../../../../../../../reference/runtime/host-main.cjs#L751027-L751045) | `FunctionDeclaration` | no | `result` |
| [evaluation:523878-523896](../../../../../../../reference/runtime/sand-eval-runner.cjs#L523878-L523896) | `FunctionDeclaration` | no | `result` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:751027-751045](../../../../../../../reference/runtime/host-main.cjs#L751027-L751045) | 2 | 0 | 0 | 3 | 0 | 0 |
| [evaluation:523878-523896](../../../../../../../reference/runtime/sand-eval-runner.cjs#L523878-L523896) | 2 | 0 | 0 | 3 | 0 | 0 |

### host:751027

Calls written directly in this body: `new McpTextContent`, `new McpToolResult`, `new McpToolResultContentItem`, `success2.clone`, `success2.content.some`, `successOf`.

Assignment or increment targets: `spoken.content`.

SHA-256 of the source span: `a908d9e1de225385fa5a503dabd92724dbde1805cca68a467f63a60200770d0a`.

### evaluation:523878

Calls written directly in this body: `new McpTextContent`, `new McpToolResult`, `new McpToolResultContentItem`, `success2.clone`, `success2.content.some`, `successOf`.

Assignment or increment targets: `spoken.content`.

SHA-256 of the source span: `a908d9e1de225385fa5a503dabd92724dbde1805cca68a467f63a60200770d0a`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
