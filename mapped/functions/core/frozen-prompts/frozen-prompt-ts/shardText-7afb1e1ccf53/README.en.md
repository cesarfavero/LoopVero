# `shardText`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/prompts/README.en.md).

**Module:** `core/frozen-prompts/frozen-prompt.ts` · [Module README](../../../../../modules/core/frozen-prompts/frozen-prompt-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:537295-537303](../../../../../../reference/runtime/sand-eval-runner.cjs#L537295-L537303) | `FunctionDeclaration` | no | `files, path33, frozenPromptId` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:537295-537303](../../../../../../reference/runtime/sand-eval-runner.cjs#L537295-L537303) | 2 | 0 | 0 | 1 | 1 | 0 |

### evaluation:537295

Calls written directly in this body: `new Error`, `text3.endsWith`, `text3.slice`.

Explicit throw targets: `Error`.

SHA-256 of the source span: `7ded4a70fda63727acec9a97a97b0fb0f1f3af15aeb4f128df9511ad8e59308e`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
