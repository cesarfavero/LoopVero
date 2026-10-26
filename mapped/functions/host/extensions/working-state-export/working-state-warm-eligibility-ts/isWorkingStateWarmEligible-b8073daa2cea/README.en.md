# `isWorkingStateWarmEligible`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/working-state-export/working-state-warm-eligibility.ts` · [Module README](../../../../../../modules/host/extensions/working-state-export/working-state-warm-eligibility-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:785874-785881](../../../../../../../reference/runtime/host-main.cjs#L785874-L785881) | `FunctionDeclaration` | no | `agentId, deps` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:785874-785881](../../../../../../../reference/runtime/host-main.cjs#L785874-L785881) | 5 | 0 | 0 | 6 | 0 | 0 |

### host:785874

Calls written directly in this body: `deps.checkGate`, `deps.hasActivePause`, `deps.hasAuthenticatedBootstrap`, `deps.isBoxAgent`, `deps.isStoreEnabled`, `deps.isV2StoreEnabled`.

SHA-256 of the source span: `230fc523ce3c53a8272eb468821839730f73e01cce313c553273e65e5071d47d`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
