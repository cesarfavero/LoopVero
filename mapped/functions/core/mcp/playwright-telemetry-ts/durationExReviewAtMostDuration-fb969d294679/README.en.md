# `durationExReviewAtMostDuration`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/browser-computer/README.en.md).

**Module:** `core/mcp/playwright-telemetry.ts` · [Module README](../../../../../modules/core/mcp/playwright-telemetry-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:700504-700507](../../../../../../reference/runtime/host-main.cjs#L700504-L700507) | `FunctionDeclaration` | no | `durationMs, foregroundReviewMs` |
| [evaluation:514296-514299](../../../../../../reference/runtime/sand-eval-runner.cjs#L514296-L514299) | `FunctionDeclaration` | no | `durationMs, foregroundReviewMs` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:700504-700507](../../../../../../reference/runtime/host-main.cjs#L700504-L700507) | 1 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:514296-514299](../../../../../../reference/runtime/sand-eval-runner.cjs#L514296-L514299) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:700504

Calls written directly in this body: `Math.max`, `Math.min`, `Number.isFinite`.

SHA-256 of the source span: `94cd268446373c7aac17a0311d5f132bca8e12b7d571f3f2ed34d7e360dbb958`.

### evaluation:514296

Calls written directly in this body: `Math.max`, `Math.min`, `Number.isFinite`.

SHA-256 of the source span: `94cd268446373c7aac17a0311d5f132bca8e12b7d571f3f2ed34d7e360dbb958`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
