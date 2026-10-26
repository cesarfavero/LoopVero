# `runOccurrenceStarts`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `agent-engine/loop-detection/agent-loop-detector.js` · [Module README](../../../../../modules/agent-engine/loop-detection/agent-loop-detector-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:310978-310990](../../../../../../reference/runtime/sand-eval-runner.cjs#L310978-L310990) | `FunctionDeclaration` | no | `keys, { patternStartIdx, patternLength }` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:310978-310990](../../../../../../reference/runtime/sand-eval-runner.cjs#L310978-L310990) | 1 | 2 | 0 | 2 | 0 | 0 |

### evaluation:310978

Calls written directly in this body: `keys.slice`, `starts.push`.

Assignment or increment targets: `offset2`, `start`.

SHA-256 of the source span: `ee7a6a694ba8adb232eaa6d1ecef0ccfb082fb2410cb9e9ac23b563b871bcff4`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
