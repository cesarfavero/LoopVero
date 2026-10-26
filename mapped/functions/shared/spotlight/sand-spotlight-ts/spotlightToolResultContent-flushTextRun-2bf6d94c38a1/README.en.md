# `spotlightToolResultContent/flushTextRun`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `shared/spotlight/sand-spotlight.ts` · [Module README](../../../../../modules/shared/spotlight/sand-spotlight-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:761643-761647](../../../../../../reference/runtime/host-main.cjs#L761643-L761647) | `ArrowFunctionExpression` | no | `(none)` |
| [evaluation:552458-552462](../../../../../../reference/runtime/sand-eval-runner.cjs#L552458-L552462) | `ArrowFunctionExpression` | no | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:761643-761647](../../../../../../reference/runtime/host-main.cjs#L761643-L761647) | 1 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:552458-552462](../../../../../../reference/runtime/sand-eval-runner.cjs#L552458-L552462) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:761643

Calls written directly in this body: `body.push`, `stripSpotlightTag`, `textRun.join`.

Assignment or increment targets: `textRun`.

SHA-256 of the source span: `917b8ba4229e159592b211032ab63a7015fffaa685ce937de0c1671b9421f73c`.

### evaluation:552458

Calls written directly in this body: `body.push`, `stripSpotlightTag`, `textRun.join`.

Assignment or increment targets: `textRun`.

SHA-256 of the source span: `917b8ba4229e159592b211032ab63a7015fffaa685ce937de0c1671b9421f73c`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
