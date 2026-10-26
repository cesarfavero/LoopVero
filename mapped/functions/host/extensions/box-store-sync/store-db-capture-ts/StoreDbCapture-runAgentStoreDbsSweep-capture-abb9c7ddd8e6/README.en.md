# `StoreDbCapture.runAgentStoreDbsSweep/capture`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/box-store-sync/store-db-capture.ts` · [Module README](../../../../../../modules/host/extensions/box-store-sync/store-db-capture-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:480825-480853](../../../../../../../reference/runtime/host-main.cjs#L480825-L480853) | `ArrowFunctionExpression` | yes | `bundle` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:480825-480853](../../../../../../../reference/runtime/host-main.cjs#L480825-L480853) | 2 | 1 | 1 | 0 | 0 | 1 |

### host:480825

Calls written directly in this body: `capturedThisSweep.add`, `errorMessage`, `recordStoreDbCaptureFailure`, `this.bundleCapture.captureAgentDbBundle`, `this.log`.

Assignment or increment targets: `agentCount`, `committed`, `summary.failures`.

SHA-256 of the source span: `93ccf79148dfd297465480c5df616e5393b4649c47a3267c9dd7908a6a3e0d9f`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
