# `richTextTitle`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/integrations/README.en.md).

**Module:** `core/runner/library-docs/mcp-doc-touches.ts` · [Module README](../../../../../../modules/core/runner/library-docs/mcp-doc-touches-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:573919-573933](../../../../../../../reference/runtime/sand-eval-runner.cjs#L573919-L573933) | `FunctionDeclaration` | no | `value` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:573919-573933](../../../../../../../reference/runtime/sand-eval-runner.cjs#L573919-L573933) | 3 | 0 | 0 | 4 | 0 | 0 |

### evaluation:573919

Calls written directly in this body: `Array.isArray`, `jsonObjectOf2`, `richTextTitle`, `runs.join`, `sanitizeTitle`, `value.flatMap`.

SHA-256 of the source span: `86237a09bd2ce533d901e5e6a43da5122a354f1856b2d5e6ceeeb97628952f42`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
