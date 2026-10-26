# `isModelFallbackRetryError`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/transient-stream-error.ts` · [Module README](../../../../../modules/core/runner/transient-stream-error-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:589939-589949](../../../../../../reference/runtime/sand-eval-runner.cjs#L589939-L589949) | `FunctionDeclaration` | no | `error63` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:589939-589949](../../../../../../reference/runtime/sand-eval-runner.cjs#L589939-L589949) | 1 | 1 | 0 | 2 | 0 | 0 |

### evaluation:589939

Calls written directly in this body: `new Set`, `seen.add`, `seen.has`.

Assignment or increment targets: `current2`.

SHA-256 of the source span: `987aecc58355befac252ec83a7033e867975fbae2cfe02595eaa9dbd6f30b3aa`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
