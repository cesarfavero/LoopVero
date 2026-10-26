# `describePatternRun/waits`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `agent-engine/loop-detection/agent-loop-detector.js` · [Module README](../../../../../modules/agent-engine/loop-detection/agent-loop-detector-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:310954-310954](../../../../../../reference/runtime/sand-eval-runner.cjs#L310954-L310954) | `ArrowFunctionExpression` | no | `msg` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:310954-310954](../../../../../../reference/runtime/sand-eval-runner.cjs#L310954-L310954) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at evaluation:310954 uses an implicit arrow-function return.

### evaluation:310954

Calls written directly in this body: `.some`.

SHA-256 of the source span: `f163f3b0fd4127efba4c65406ae35dcf089673c9e65301c974af2dc99fd471e3`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
