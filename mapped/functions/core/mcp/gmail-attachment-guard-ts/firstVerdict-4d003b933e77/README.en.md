# `firstVerdict`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/integrations/README.en.md).

**Module:** `core/mcp/gmail-attachment-guard.ts` · [Module README](../../../../../modules/core/mcp/gmail-attachment-guard-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:584351-584359](../../../../../../reference/runtime/sand-eval-runner.cjs#L584351-L584359) | `FunctionDeclaration` | no | `attachments` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:584351-584359](../../../../../../reference/runtime/sand-eval-runner.cjs#L584351-L584359) | 1 | 1 | 0 | 2 | 0 | 0 |

### evaluation:584351

Calls written directly in this body: `checkAttachment`.

Assignment or increment targets: `first`.

SHA-256 of the source span: `99c0652f8344506ba4c5c43031df7b094f9ba958ac116c0285f66c5f2daeb140`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
