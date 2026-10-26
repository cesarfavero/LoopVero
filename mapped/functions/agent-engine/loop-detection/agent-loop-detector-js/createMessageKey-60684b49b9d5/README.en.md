# `createMessageKey`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `agent-engine/loop-detection/agent-loop-detector.js` · [Module README](../../../../../modules/agent-engine/loop-detection/agent-loop-detector-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:310884-310901](../../../../../../reference/runtime/sand-eval-runner.cjs#L310884-L310901) | `FunctionDeclaration` | no | `message, options2 = {}` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:310884-310901](../../../../../../reference/runtime/sand-eval-runner.cjs#L310884-L310901) | 5 | 0 | 0 | 3 | 0 | 0 |

### evaluation:310884

Calls written directly in this body: `.join`, `.sort`, `message.toolCalls.map`, `normalizeText`.

Assignment or increment targets: `toolInfo`.

SHA-256 of the source span: `d8f911ee643a223ed27ba43c099cac1c49e6c73368a40972cd1a5f3bd9d434c2`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
