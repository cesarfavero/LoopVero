# `StructuredLogTransport.shipLogs`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `shared/observability/structured-log-transport.ts` · [Module README](../../../../../modules/shared/observability/structured-log-transport-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:453349-453382](../../../../../../reference/runtime/host-main.cjs#L453349-L453382) | `method` | yes | `logs` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:453349-453382](../../../../../../reference/runtime/host-main.cjs#L453349-L453382) | 3 | 0 | 1 | 3 | 0 | 1 |

### host:453349

Calls written directly in this body: `isValidLogShipReceipt`, `new AbortController`, `this.options.createClient`, `this.options.submitDeadline.run`, `this.reportSubmitTimeout`, `this.requestAbortControllers.add`, `this.requestAbortControllers.delete`.

Assignment or increment targets: `attemptedClient`, `this.client`, `this.submitTimeoutStreakActive`.

SHA-256 of the source span: `beed7f17cdc099fe793406400d02513a87fcd49ed747e8147f8d8afaeaade3e5`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
