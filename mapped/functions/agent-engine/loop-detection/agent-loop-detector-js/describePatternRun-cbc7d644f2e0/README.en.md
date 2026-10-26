# `describePatternRun`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `agent-engine/loop-detection/agent-loop-detector.js` · [Module README](../../../../../modules/agent-engine/loop-detection/agent-loop-detector-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:310948-310977](../../../../../../reference/runtime/sand-eval-runner.cjs#L310948-L310977) | `FunctionDeclaration` | no | `params` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:310948-310977](../../../../../../reference/runtime/sand-eval-runner.cjs#L310948-L310977) | 1 | 1 | 0 | 1 | 0 | 0 |

### evaluation:310948

Calls written directly in this body: `Math.max`, `collectRunOccurrenceResults`, `messages.slice`, `occurrenceStarts.every`, `patternMessages.every`, `runOccurrenceStarts`.

Assignment or increment targets: `i`, `identicalPairs`.

SHA-256 of the source span: `fd97933012364c50f133e2af2dbec6b06edb5eda5b9a7419f79b234140addc6c`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
