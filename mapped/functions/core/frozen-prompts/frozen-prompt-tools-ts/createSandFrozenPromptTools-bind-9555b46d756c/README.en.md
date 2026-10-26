# `createSandFrozenPromptTools/bind`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/prompts/README.en.md).

**Module:** `core/frozen-prompts/frozen-prompt-tools.ts` · [Module README](../../../../../modules/core/frozen-prompts/frozen-prompt-tools-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:586308-586318](../../../../../../reference/runtime/sand-eval-runner.cjs#L586308-L586318) | `FunctionExpression` | no | `tools, rowPromptDate` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:586308-586318](../../../../../../reference/runtime/sand-eval-runner.cjs#L586308-L586318) | 1 | 0 | 0 | 0 | 0 | 0 |

### evaluation:586308

Calls written directly in this body: `frozenPrompt.tools.flatMap`, `new Set`, `tools.flatMap`, `tools.map`.

Assignment or increment targets: `binding`.

SHA-256 of the source span: `744327233f8c3be9b19c3b8a8e06a6bff8b58fc64f053a583a87acabc8bdcb5e`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
