# `firstRejected`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/stream-attempt.ts` · [Module README](../../../../../modules/core/runner/stream-attempt-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:590188-590190](../../../../../../reference/runtime/sand-eval-runner.cjs#L590188-L590190) | `FunctionDeclaration` | no | `results` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:590188-590190](../../../../../../reference/runtime/sand-eval-runner.cjs#L590188-L590190) | 0 | 0 | 0 | 1 | 0 | 0 |

### evaluation:590188

Calls written directly in this body: `results.find`.

SHA-256 of the source span: `272652788834544082542bd7f7b8d089e88db368672f9e71152c4740ed30b96c`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
