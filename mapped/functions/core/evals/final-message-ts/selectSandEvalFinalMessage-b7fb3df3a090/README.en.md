# `selectSandEvalFinalMessage`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `core/evals/final-message.ts` · [Module README](../../../../../modules/core/evals/final-message-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:628346-628348](../../../../../../reference/runtime/sand-eval-runner.cjs#L628346-L628348) | `FunctionDeclaration` | no | `args` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:628346-628348](../../../../../../reference/runtime/sand-eval-runner.cjs#L628346-L628348) | 1 | 0 | 0 | 1 | 0 | 0 |

### evaluation:628346

Calls written directly in this body: `args.deliveredMessages.join`.

SHA-256 of the source span: `38c932b0a3e53227c04ebfc269d6ee042c58020257615d810a97e0d82d5c8916`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
