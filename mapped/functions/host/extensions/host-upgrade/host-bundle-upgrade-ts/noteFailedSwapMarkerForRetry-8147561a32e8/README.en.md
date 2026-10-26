# `noteFailedSwapMarkerForRetry`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/host-upgrade/host-bundle-upgrade.ts` · [Module README](../../../../../../modules/host/extensions/host-upgrade/host-bundle-upgrade-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:681324-681335](../../../../../../../reference/runtime/host-main.cjs#L681324-L681335) | `FunctionDeclaration` | no | `state, marker17, maxRetries = MAX_FAILED_SWAP_RESTAGE_RETRIES` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:681324-681335](../../../../../../../reference/runtime/host-main.cjs#L681324-L681335) | 5 | 0 | 0 | 6 | 0 | 0 |

### host:681324

Calls written directly in this body: `state.swapRetryAttempts.get`, `state.swapRetryAttempts.set`.

Assignment or increment targets: `state.stagedVersion`.

SHA-256 of the source span: `62fa96dd123ca136406e6efa3f7335e0c53a9a28c2deb92c699bfa9b28757f88`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
