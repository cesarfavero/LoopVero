# `createOrbitDaemonSessionController/retireOneEffect`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/orbit/daemon-session-controller.ts` · [Module README](../../../../../../modules/host/extensions/orbit/daemon-session-controller-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:705922-705956](../../../../../../../reference/runtime/host-main.cjs#L705922-L705956) | `FunctionDeclaration` | yes | `openSession2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:705922-705956](../../../../../../../reference/runtime/host-main.cjs#L705922-L705956) | 8 | 0 | 2 | 7 | 0 | 1 |

### host:705922

Calls written directly in this body: `beginRetirement`, `closeSession`, `deps.clock.monotonicNow`, `isLostSessionError`, `isProtocolDivergence`, `reportFailure`, `sameIdentity`, `updateConfiguration`.

Assignment or increment targets: `openSession2.retirement.disableAttempted`, `retirement.disableAttempted`.

SHA-256 of the source span: `7f4157f16bbb1abf06c05d91c955fa3814cb354b2db3e116ed2a8724201b71ff`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
