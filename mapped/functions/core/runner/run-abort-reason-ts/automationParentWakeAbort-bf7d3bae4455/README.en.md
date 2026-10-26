# `automationParentWakeAbort`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/run-abort-reason.ts` · [Module README](../../../../../modules/core/runner/run-abort-reason-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:554079-554085](../../../../../../reference/runtime/sand-eval-runner.cjs#L554079-L554085) | `FunctionDeclaration` | no | `wakeParentToolCallId` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:554079-554085](../../../../../../reference/runtime/sand-eval-runner.cjs#L554079-L554085) | 0 | 0 | 0 | 1 | 0 | 0 |

### evaluation:554079

Calls written directly in this body: `new SandRunAbortError`.

SHA-256 of the source span: `c238d168be02bf19b692b6c8d1affbc374301aabf666846860d61a524170989e`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
