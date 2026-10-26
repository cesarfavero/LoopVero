# `createToolHandoff/stopOtherTools`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/tool-handoff.ts` · [Module README](../../../../../../modules/core/runner/tools/tool-handoff-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:569314-569321](../../../../../../../reference/runtime/sand-eval-runner.cjs#L569314-L569321) | `FunctionDeclaration` | no | `{ toolCallId }` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:569314-569321](../../../../../../../reference/runtime/sand-eval-runner.cjs#L569314-L569321) | 1 | 1 | 0 | 0 | 0 | 0 |

### evaluation:569314

Calls written directly in this body: `call.cancel`, `new SandRunAbortError`.

Assignment or increment targets: `handedOff`.

SHA-256 of the source span: `6e152cafd7757440078d35ad4d634d2b2c46c6fc215a09ebbbf6211ab91f81cd`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
