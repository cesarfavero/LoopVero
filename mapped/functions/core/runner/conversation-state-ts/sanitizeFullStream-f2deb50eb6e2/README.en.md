# `sanitizeFullStream`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/conversation-state.ts` · [Module README](../../../../../modules/core/runner/conversation-state-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:529469-529510](../../../../../../reference/runtime/sand-eval-runner.cjs#L529469-L529510) | `FunctionDeclaration` | yes | `ctx, fullStream, observer` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:529469-529510](../../../../../../reference/runtime/sand-eval-runner.cjs#L529469-L529510) | 7 | 1 | 0 | 0 | 2 | 2 |

### evaluation:529469

Calls written directly in this body: `String`, `new Error`, `observer.onStreamPart`, `safelyObservePromptStream`, `sanitizeUsage`.

Assignment or increment targets: `observeParts`, `outcome`, `streamError`.

Explicit throw targets: `error63`, `streamError`.

SHA-256 of the source span: `eee192bdbbcf4dd3a849415aa201fb102c36add964e99b23c556e18908addad1`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
