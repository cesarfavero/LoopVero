# `bindCallerAbort`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/run-abort-reason.ts` · [Module README](../../../../../modules/core/runner/run-abort-reason-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:554086-554091](../../../../../../reference/runtime/sand-eval-runner.cjs#L554086-L554091) | `FunctionDeclaration` | no | `signal, abort` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:554086-554091](../../../../../../reference/runtime/sand-eval-runner.cjs#L554086-L554091) | 1 | 0 | 0 | 1 | 0 | 0 |

### evaluation:554086

Calls written directly in this body: `onAbort`, `signal.addEventListener`.

SHA-256 of the source span: `29389a41bfccd0b661c376454755bdec623c99f3c9ad60b6a5613c12f0743392`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
