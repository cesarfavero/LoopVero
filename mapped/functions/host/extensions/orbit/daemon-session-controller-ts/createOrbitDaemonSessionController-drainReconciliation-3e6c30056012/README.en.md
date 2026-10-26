# `createOrbitDaemonSessionController/drainReconciliation`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/orbit/daemon-session-controller.ts` · [Module README](../../../../../../modules/host/extensions/orbit/daemon-session-controller-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:705746-705772](../../../../../../../reference/runtime/host-main.cjs#L705746-L705772) | `FunctionDeclaration` | yes | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:705746-705772](../../../../../../../reference/runtime/host-main.cjs#L705746-L705772) | 4 | 1 | 1 | 2 | 0 | 1 |

### host:705746

Calls written directly in this body: `reconcileOneEffect`, `reportFailure`, `scheduleRenewal`, `scheduleRetry`.

Assignment or increment targets: `result`, `state.reconciliationRequested`, `state.retryAttempt`.

SHA-256 of the source span: `31a224456aaf869ca81d510b13477c39c962f12cc477916405feffd1a29f2002`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
