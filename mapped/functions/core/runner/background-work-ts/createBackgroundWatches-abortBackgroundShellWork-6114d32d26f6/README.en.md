# `createBackgroundWatches/abortBackgroundShellWork`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/background-work.ts` · [Module README](../../../../../modules/core/runner/background-work-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:490709-490716](../../../../../../reference/runtime/sand-eval-runner.cjs#L490709-L490716) | `ArrowFunctionExpression` | no | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:490709-490716](../../../../../../reference/runtime/sand-eval-runner.cjs#L490709-L490716) | 0 | 1 | 0 | 0 | 0 | 0 |

### evaluation:490709

Calls written directly in this body: `notifyShellWorkChanged`, `rewatch.cancel`, `shellRegistry.abortAllWork`, `shellRewatches.clear`, `shellRewatches.values`.

SHA-256 of the source span: `d11f0c3ea016a98d104a7cb9271e5e7535cccd7bdeb4fdb7447bd69aefd1a84e`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
