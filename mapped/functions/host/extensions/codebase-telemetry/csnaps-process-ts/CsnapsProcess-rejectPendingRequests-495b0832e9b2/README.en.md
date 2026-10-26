# `_CsnapsProcess.rejectPendingRequests`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/observability/README.en.md).

**Module:** `host/extensions/codebase-telemetry/csnaps-process.ts` · [Module README](../../../../../../modules/host/extensions/codebase-telemetry/csnaps-process-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:541629-541635](../../../../../../../reference/runtime/host-main.cjs#L541629-L541635) | `method` | no | `error64` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:541629-541635](../../../../../../../reference/runtime/host-main.cjs#L541629-L541635) | 0 | 1 | 0 | 0 | 0 | 0 |

### host:541629

Calls written directly in this body: `pending.reject`, `pending.signal.removeEventListener`, `this.pendingRequests.clear`, `this.pendingRequests.values`.

SHA-256 of the source span: `eae157751c83c449ded3b26afdc4932edd7263dd8d7810361deb81317bc57cf2`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
