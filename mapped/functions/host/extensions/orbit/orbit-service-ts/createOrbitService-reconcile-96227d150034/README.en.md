# `createOrbitService/reconcile`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/orbit/orbit-service.ts` · [Module README](../../../../../../modules/host/extensions/orbit/orbit-service-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:706296-706323](../../../../../../../reference/runtime/host-main.cjs#L706296-L706323) | `ArrowFunctionExpression` | yes | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:706296-706323](../../../../../../../reference/runtime/host-main.cjs#L706296-L706323) | 4 | 0 | 2 | 4 | 0 | 0 |

### host:706296

Calls written directly in this body: `deps.auth.getMachineId`, `deps.policies.chromeDiscovery.start`, `disableCapture`, `publishSessionTarget`, `requestChromeDiscovery`, `resetChromeDiscovery`, `resolveOrbitCaptureEligibility`.

Assignment or increment targets: `state.discoveryPolling`, `state.generation`, `state.sessionCredentials`.

SHA-256 of the source span: `431961d901bc27509e320c638020a775c0b2b38fc2b6ed8c7944b337c88de1d5`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
