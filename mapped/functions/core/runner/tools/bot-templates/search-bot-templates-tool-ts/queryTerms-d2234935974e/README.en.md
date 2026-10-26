# `queryTerms`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/bot-templates/search-bot-templates-tool.ts` · [Module README](../../../../../../../modules/core/runner/tools/bot-templates/search-bot-templates-tool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:770771-770777](../../../../../../../../reference/runtime/host-main.cjs#L770771-L770777) | `FunctionDeclaration` | no | `query2` |
| [evaluation:569866-569872](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L569866-L569872) | `FunctionDeclaration` | no | `query2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:770771-770777](../../../../../../../../reference/runtime/host-main.cjs#L770771-L770777) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:569866-569872](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L569866-L569872) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:770771

Calls written directly in this body: `.filter`, `.split`, `new Set`, `query2.toLowerCase`.

SHA-256 of the source span: `5ff2063c62a9fe2b80e29e360b586b166d7495c4332b5b7e474d67d9a0b9a6b4`.

### evaluation:569866

Calls written directly in this body: `.filter`, `.split`, `new Set`, `query2.toLowerCase`.

SHA-256 of the source span: `5ff2063c62a9fe2b80e29e360b586b166d7495c4332b5b7e474d67d9a0b9a6b4`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).
