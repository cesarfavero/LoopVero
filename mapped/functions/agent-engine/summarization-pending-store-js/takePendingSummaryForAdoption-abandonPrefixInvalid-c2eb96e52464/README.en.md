# `takePendingSummaryForAdoption/abandonPrefixInvalid`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/components/context-compaction/README.en.md).

**Module:** `agent-engine/summarization-pending-store.js` · [Module README](../../../../modules/agent-engine/summarization-pending-store-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:647998-648007](../../../../../reference/runtime/host-main.cjs#L647998-L648007) | `ArrowFunctionExpression` | no | `(none)` |
| [evaluation:439655-439664](../../../../../reference/runtime/sand-eval-runner.cjs#L439655-L439664) | `ArrowFunctionExpression` | no | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:647998-648007](../../../../../reference/runtime/host-main.cjs#L647998-L648007) | 1 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:439655-439664](../../../../../reference/runtime/sand-eval-runner.cjs#L439655-L439664) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:647998

Calls written directly in this body: `emitSummaryLifecycleAbandoned`, `resumeSummaryLifecycle`.

SHA-256 of the source span: `7e1e18ccd217aec3b09ada4b85521c0a860884f0ed1eed9a06289af171fa2c0f`.

### evaluation:439655

Calls written directly in this body: `emitSummaryLifecycleAbandoned`, `resumeSummaryLifecycle`.

SHA-256 of the source span: `891e5f94738ba3c3a32024c4804d137d6ab1f518a36c807142d2af929376bc70`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
