# `SandLocalExecBridge.submitResponses`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/local-exec/local-exec-bridge.ts` · [Module README](../../../../../../modules/host/extensions/local-exec/local-exec-bridge-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:682130-682162](../../../../../../../reference/runtime/host-main.cjs#L682130-L682162) | `method` | no | `batch` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:682130-682162](../../../../../../../reference/runtime/host-main.cjs#L682130-L682162) | 9 | 1 | 0 | 1 | 0 | 0 |

### host:682130

Calls written directly in this body: `boundedVariant`, `this.deps.clock.now`, `this.deps.reportProvider`, `this.providerForBatch`.

Assignment or increment targets: `provider.computerIdPresent`, `provider.hadHello`, `provider.hasHeartbeat`, `provider.lastSeenAt`, `provider.supervised`, `provider.variant`.

SHA-256 of the source span: `b22d34bfb933eec0685b267d9794f5671549fc2823d6f6579a55077637103de7`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
