# `checkForAgentMessageLooping/runOf`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `agent-engine/loop-detection/agent-loop-detector.js` · [Module README](../../../../../modules/agent-engine/loop-detection/agent-loop-detector-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:311304-311310](../../../../../../reference/runtime/sand-eval-runner.cjs#L311304-L311310) | `ArrowFunctionExpression` | no | `pattern` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:311304-311310](../../../../../../reference/runtime/sand-eval-runner.cjs#L311304-L311310) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at evaluation:311304 uses an implicit arrow-function return.

### evaluation:311304

Calls written directly in this body: `describePatternRun`.

SHA-256 of the source span: `76455441c2ac40f812d613977ef3a215c74e7e3fbafc2e2e8a05186930d4db9f`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
