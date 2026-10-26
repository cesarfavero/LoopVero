# `createSandFrozenPromptTools/middleware`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/prompts/README.en.md).

**Module:** `core/frozen-prompts/frozen-prompt-tools.ts` · [Module README](../../../../../modules/core/frozen-prompts/frozen-prompt-tools-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:586319-586319](../../../../../../reference/runtime/sand-eval-runner.cjs#L586319-L586319) | `ArrowFunctionExpression` | no | `executor` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:586319-586319](../../../../../../reference/runtime/sand-eval-runner.cjs#L586319-L586319) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at evaluation:586319 uses an implicit arrow-function return.

### evaluation:586319

Calls written directly in this body: `new FrozenPromptToolsMiddleware`.

SHA-256 of the source span: `e37aee05f73de83302ef145f93849a997508f27a66f6ee5ddbfaa4a8465a1881`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
