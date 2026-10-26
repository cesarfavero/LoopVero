# `createBackgroundWatches/watchBackgroundShell`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/background-work.ts` · [Module README](../../../../../modules/core/runner/background-work-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:490619-490672](../../../../../../reference/runtime/sand-eval-runner.cjs#L490619-L490672) | `ArrowFunctionExpression` | no | `shellId, options2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:490619-490672](../../../../../../reference/runtime/sand-eval-runner.cjs#L490619-L490672) | 5 | 0 | 0 | 3 | 0 | 0 |

### evaluation:490619

Calls written directly in this body: `.listWork`, `.some`, `asyncTaskFallbackLabel`, `definedProvenance`, `host.getConversationId`, `host.pendingWakeArmedHandler`, `host.pollShellTerminalFile`, `registry3`, `shellId.trim`, `shellRewatches.has`, `shellRewatches.set`.

Assignment or increment targets: `labelDescriptor`.

SHA-256 of the source span: `4d75db21ddc87b32e6a60c35bc9affa32b3181afabcdf6cd1e5c77c9f818d40c`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
