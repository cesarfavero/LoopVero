# `createOrbitDaemonSessionController/setTarget`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/orbit/daemon-session-controller.ts` · [Module README](../../../../../../modules/host/extensions/orbit/daemon-session-controller-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:705638-705657](../../../../../../../reference/runtime/host-main.cjs#L705638-L705657) | `FunctionDeclaration` | no | `next` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:705638-705657](../../../../../../../reference/runtime/host-main.cjs#L705638-L705657) | 4 | 0 | 0 | 2 | 0 | 0 |

### host:705638

Calls written directly in this body: `beginRetirement`, `normalizeTarget`, `requestReconciliation`, `sameIdentity`, `sameSessionCredentials`, `sameTarget`.

Assignment or increment targets: `state.rejectedCredentials`, `state.retryAttempt`, `state.target`.

SHA-256 of the source span: `85b0c00436d96e9a5ad9444709952aab68422488afb89eca4f610de446b08dc5`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
