# `createOrbitDaemonSessionController/renewSession`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/orbit/daemon-session-controller.ts` · [Module README](../../../../../../modules/host/extensions/orbit/daemon-session-controller-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:705886-705898](../../../../../../../reference/runtime/host-main.cjs#L705886-L705898) | `FunctionDeclaration` | yes | `openSession2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:705886-705898](../../../../../../../reference/runtime/host-main.cjs#L705886-L705898) | 0 | 0 | 1 | 2 | 0 | 1 |

### host:705886

Calls written directly in this body: `handleSessionRpcFailure`, `leaseDeadlines`, `openSession2.session.renew`.

Assignment or increment targets: `openSession2.leaseExpiresAtMonotonicMs`, `openSession2.renewAtMonotonicMs`.

SHA-256 of the source span: `4513fecdc520c9c8d6fd2c043cc39c7cbd43591b6ce21567efbb47f46a772ecc`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
