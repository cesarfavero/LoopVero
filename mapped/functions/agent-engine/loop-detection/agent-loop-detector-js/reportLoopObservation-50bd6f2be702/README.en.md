# `reportLoopObservation`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `agent-engine/loop-detection/agent-loop-detector.js` · [Module README](../../../../../modules/agent-engine/loop-detection/agent-loop-detector-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:624551-624559](../../../../../../reference/runtime/host-main.cjs#L624551-L624559) | `FunctionDeclaration` | no | `reporting, observation` |
| [evaluation:310683-310691](../../../../../../reference/runtime/sand-eval-runner.cjs#L310683-L310691) | `FunctionDeclaration` | no | `reporting, observation` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:624551-624559](../../../../../../reference/runtime/host-main.cjs#L624551-L624559) | 1 | 0 | 0 | 1 | 0 | 1 |
| [evaluation:310683-310691](../../../../../../reference/runtime/sand-eval-runner.cjs#L310683-L310691) | 1 | 0 | 0 | 1 | 0 | 1 |

### host:624551

Calls written directly in this body: `reporting.onDetection`.

SHA-256 of the source span: `ddd6f62244981b6d4a2d593098687881a11a42e486fa2eb1f3178f10ebc3760f`.

### evaluation:310683

Calls written directly in this body: `reporting.onDetection`.

SHA-256 of the source span: `ddd6f62244981b6d4a2d593098687881a11a42e486fa2eb1f3178f10ebc3760f`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
