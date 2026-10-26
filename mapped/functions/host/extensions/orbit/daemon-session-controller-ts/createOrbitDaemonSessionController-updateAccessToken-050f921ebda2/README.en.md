# `createOrbitDaemonSessionController/updateAccessToken`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/orbit/daemon-session-controller.ts` · [Module README](../../../../../../modules/host/extensions/orbit/daemon-session-controller-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:705991-706006](../../../../../../../reference/runtime/host-main.cjs#L705991-L706006) | `FunctionDeclaration` | yes | `openSession2, accessToken, signal` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:705991-706006](../../../../../../../reference/runtime/host-main.cjs#L705991-L706006) | 1 | 0 | 1 | 1 | 0 | 0 |

### host:705991

Calls written directly in this body: `BigInt`, `assertAcknowledgedRevision`, `openSession2.session.updateAccessToken`.

Assignment or increment targets: `accessTokenState.lastConfirmed`, `accessTokenState.needsReconciliation`, `accessTokenState.revision`.

SHA-256 of the source span: `c911054ad7b0165d9b2ea39e1c43bf81db28f43137028627f442584513539061`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
