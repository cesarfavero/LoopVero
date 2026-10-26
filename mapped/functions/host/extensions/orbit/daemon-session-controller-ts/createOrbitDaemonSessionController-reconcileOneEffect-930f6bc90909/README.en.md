# `createOrbitDaemonSessionController/reconcileOneEffect`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/orbit/daemon-session-controller.ts` · [Module README](../../../../../../modules/host/extensions/orbit/daemon-session-controller-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:705773-705810](../../../../../../../reference/runtime/host-main.cjs#L705773-L705810) | `FunctionDeclaration` | yes | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:705773-705810](../../../../../../../reference/runtime/host-main.cjs#L705773-L705810) | 11 | 0 | 5 | 8 | 0 | 0 |

### host:705773

Calls written directly in this body: `beginRetirement`, `deps.clock.monotonicNow`, `needsAccessTokenUpdate`, `needsConfigurationUpdate`, `openSession`, `publishOperations`, `reconcileAccessToken`, `reconcileConfiguration`, `renewSession`, `retireOneEffect`, `sameIdentity`, `targetUsesSessionCredentials`.

SHA-256 of the source span: `c57e2fe90080b37dc7dae45e8995a96a082d938e628eb3f87273b422b8b92bf4`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
