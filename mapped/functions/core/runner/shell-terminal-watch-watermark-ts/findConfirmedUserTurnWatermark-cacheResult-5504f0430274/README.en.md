# `findConfirmedUserTurnWatermark/cacheResult`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/shell-terminal-watch-watermark.ts` · [Module README](../../../../../modules/core/runner/shell-terminal-watch-watermark-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:530110-530126](../../../../../../reference/runtime/sand-eval-runner.cjs#L530110-L530126) | `ArrowFunctionExpression` | no | `result, newestTurnSkipped2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:530110-530126](../../../../../../reference/runtime/sand-eval-runner.cjs#L530110-L530126) | 4 | 0 | 0 | 2 | 0 | 0 |

### evaluation:530110

Calls written directly in this body: `host.setConfirmedUserTurnWatermarkCache`, `isConfirmedUserTurnWatermarkValid`, `new Uint8Array`.

SHA-256 of the source span: `9e1b2b31beb8c111f25356c676023276966e852386b53760b53c9f73785ccac2`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
