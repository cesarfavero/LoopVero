# `kindOf`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/integrations/README.en.md).

**Module:** `core/mcp/gmail-attachment-guard.ts` · [Module README](../../../../../modules/core/mcp/gmail-attachment-guard-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:584286-584292](../../../../../../reference/runtime/sand-eval-runner.cjs#L584286-L584292) | `FunctionDeclaration` | no | `attachment` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:584286-584292](../../../../../../reference/runtime/sand-eval-runner.cjs#L584286-L584292) | 3 | 0 | 0 | 2 | 0 | 0 |

### evaluation:584286

Calls written directly in this body: `.pop`, `.split`, `.toLowerCase`, `[computed].trim`, `attachment.filename.trim`, `attachment.mimeType.split`.

SHA-256 of the source span: `c76bf61c4d7b898cde715944a0a504650df7618f16da5d8a75ed04fdbea83175`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
