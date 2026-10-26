# `createSubagentRuntime/setBackgroundSubagentHandler`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/subagents/README.en.md).

**Module:** `core/runner/subagent-runtime.ts` · [Module README](../../../../../modules/core/runner/subagent-runtime-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:535601-535603](../../../../../../reference/runtime/sand-eval-runner.cjs#L535601-L535603) | `FunctionDeclaration` | no | `handler` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:535601-535603](../../../../../../reference/runtime/sand-eval-runner.cjs#L535601-L535603) | 0 | 0 | 0 | 0 | 0 | 0 |

### evaluation:535601

Calls written directly in this body: no calls identifiable by name.

Assignment or increment targets: `onBackgroundSubagentSettled`.

SHA-256 of the source span: `932f5df0dcf49a65d6a17c4350cd4304a2fbf911b04b80d7bf0a2bbcf618cab9`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
