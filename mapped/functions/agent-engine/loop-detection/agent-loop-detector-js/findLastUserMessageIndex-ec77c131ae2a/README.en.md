# `findLastUserMessageIndex`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `agent-engine/loop-detection/agent-loop-detector.js` · [Module README](../../../../../modules/agent-engine/loop-detection/agent-loop-detector-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:311128-311135](../../../../../../reference/runtime/sand-eval-runner.cjs#L311128-L311135) | `FunctionDeclaration` | no | `loopMessages` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:311128-311135](../../../../../../reference/runtime/sand-eval-runner.cjs#L311128-L311135) | 1 | 1 | 0 | 2 | 0 | 0 |

### evaluation:311128

Calls written directly in this body: no calls identifiable by name.

Assignment or increment targets: `i`.

SHA-256 of the source span: `462aa4daac75a129438480f6de0ab4b14f60c3c899e804e3de9c37c5bd7d6281`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
