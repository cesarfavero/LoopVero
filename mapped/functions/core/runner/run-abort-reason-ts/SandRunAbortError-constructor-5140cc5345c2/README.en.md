# `SandRunAbortError.constructor`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/run-abort-reason.ts` · [Module README](../../../../../modules/core/runner/run-abort-reason-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:554067-554077](../../../../../../reference/runtime/sand-eval-runner.cjs#L554067-L554077) | `method` | no | `{     intentional,     reason,     completedToolCallId   }` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:554067-554077](../../../../../../reference/runtime/sand-eval-runner.cjs#L554067-L554077) | 0 | 0 | 0 | 0 | 0 | 0 |

### evaluation:554067

Calls written directly in this body: `super`.

Assignment or increment targets: `this.completedToolCallId`, `this.intentional`, `this.name`, `this.reason`.

SHA-256 of the source span: `f70b509705eb80bfc10808bf74fad84469cfd235dd220bdf578caaee37376468`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
