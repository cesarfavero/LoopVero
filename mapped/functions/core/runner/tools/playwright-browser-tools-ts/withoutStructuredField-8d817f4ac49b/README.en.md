# `withoutStructuredField`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/browser-computer/README.en.md).

**Module:** `core/runner/tools/playwright-browser-tools.ts` · [Module README](../../../../../../modules/core/runner/tools/playwright-browser-tools-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:750668-750680](../../../../../../../reference/runtime/host-main.cjs#L750668-L750680) | `FunctionDeclaration` | no | `result, field` |
| [evaluation:523519-523531](../../../../../../../reference/runtime/sand-eval-runner.cjs#L523519-L523531) | `FunctionDeclaration` | no | `result, field` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:750668-750680](../../../../../../../reference/runtime/host-main.cjs#L750668-L750680) | 2 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:523519-523531](../../../../../../../reference/runtime/sand-eval-runner.cjs#L523519-L523531) | 2 | 0 | 0 | 2 | 0 | 0 |

### host:750668

Calls written directly in this body: `Object.keys`, `new McpToolResult`, `reported2.toJson`, `success2.clone`, `successOf`.

Assignment or increment targets: `stripped.structuredContent`.

SHA-256 of the source span: `a0e2c6ed4ae0c3bda719bb5b6fdcc7489cfe14ebf73f5de41b53efd94b7d00ff`.

### evaluation:523519

Calls written directly in this body: `Object.keys`, `new McpToolResult`, `reported2.toJson`, `success2.clone`, `successOf`.

Assignment or increment targets: `stripped.structuredContent`.

SHA-256 of the source span: `a0e2c6ed4ae0c3bda719bb5b6fdcc7489cfe14ebf73f5de41b53efd94b7d00ff`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
