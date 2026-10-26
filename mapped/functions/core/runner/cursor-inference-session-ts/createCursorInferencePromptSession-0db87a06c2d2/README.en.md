# `createCursorInferencePromptSession`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/inference/README.en.md).

**Module:** `core/runner/cursor-inference-session.ts` · [Module README](../../../../../modules/core/runner/cursor-inference-session-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:597538-597546](../../../../../../reference/runtime/sand-eval-runner.cjs#L597538-L597546) | `FunctionDeclaration` | no | `options2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:597538-597546](../../../../../../reference/runtime/sand-eval-runner.cjs#L597538-L597546) | 0 | 0 | 0 | 1 | 0 | 0 |

### evaluation:597538

Calls written directly in this body: `.getSession`, `createProtoSessionProvider`, `createSandCursorBackendClient`.

SHA-256 of the source span: `6a526674b9a04e1809eca11326aadd0ee572c6c61ce05253421aa991d275ea65`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
