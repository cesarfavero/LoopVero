# `refsInText`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/integrations/README.en.md).

**Module:** `core/runner/library-docs/mcp-doc-touches.ts` · [Module README](../../../../../../modules/core/runner/library-docs/mcp-doc-touches-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:573899-573906](../../../../../../../reference/runtime/sand-eval-runner.cjs#L573899-L573906) | `FunctionDeclaration` | no | `text3, resolver` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:573899-573906](../../../../../../../reference/runtime/sand-eval-runner.cjs#L573899-L573906) | 1 | 1 | 0 | 1 | 0 | 0 |

### evaluation:573899

Calls written directly in this body: `match2[computed].replace`, `refs.push`, `resolver.url`, `text3.matchAll`.

SHA-256 of the source span: `9dfbb0d961a1850e7bb5cbec9a1bde374b4ca36c0b62e77d9233ca407082ff51`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
