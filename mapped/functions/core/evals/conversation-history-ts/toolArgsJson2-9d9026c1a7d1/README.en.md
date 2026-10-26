# `toolArgsJson2`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `core/evals/conversation-history.ts` · [Module README](../../../../../modules/core/evals/conversation-history-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:628858-628865](../../../../../../reference/runtime/sand-eval-runner.cjs#L628858-L628865) | `FunctionDeclaration` | no | `args` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:628858-628865](../../../../../../reference/runtime/sand-eval-runner.cjs#L628858-L628865) | 0 | 0 | 0 | 2 | 0 | 1 |

### evaluation:628858

Calls written directly in this body: `JSON.parse`, `JSON.stringify`.

SHA-256 of the source span: `b58b505fa14741b0e405649c6b485d8c4df48baed891778148728e34b3e82ce7`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
