# `errorResult2`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/integrations/README.en.md).

**Module:** `core/mcp/box-mcp-exec.ts` · [Module README](../../../../../modules/core/mcp/box-mcp-exec-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:514616-514623](../../../../../../reference/runtime/sand-eval-runner.cjs#L514616-L514623) | `FunctionDeclaration` | no | `message` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:514616-514623](../../../../../../reference/runtime/sand-eval-runner.cjs#L514616-L514623) | 0 | 0 | 0 | 1 | 0 | 0 |

### evaluation:514616

Calls written directly in this body: `new McpError`, `new McpResult`.

SHA-256 of the source span: `b88e96f6eb6a71829250415a5ae34c9ae8d4b0cd0dcc6e8821e5499c415ebeab`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
