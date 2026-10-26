# `deploymentZoneOf`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `shared/node/cursor-backend/isolated-deployment.ts` · [Module README](../../../../../../modules/shared/node/cursor-backend/isolated-deployment-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:451573-451577](../../../../../../../reference/runtime/host-main.cjs#L451573-L451577) | `FunctionDeclaration` | no | `backendUrl` |
| [evaluation:597119-597123](../../../../../../../reference/runtime/sand-eval-runner.cjs#L597119-L597123) | `FunctionDeclaration` | no | `backendUrl` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:451573-451577](../../../../../../../reference/runtime/host-main.cjs#L451573-L451577) | 1 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:597119-597123](../../../../../../../reference/runtime/sand-eval-runner.cjs#L597119-L597123) | 1 | 0 | 0 | 2 | 0 | 0 |

### host:451573

Calls written directly in this body: `.join`, `.slice`, `.split`, `COMMERCIAL_DOMAINS.includes`, `isCommercialHostname`, `normalizedHostname`.

SHA-256 of the source span: `933d57ffe94428c7bac2ef6b80f8c98b7402186921d32a66f466204ce6fa556d`.

### evaluation:597119

Calls written directly in this body: `.join`, `.slice`, `.split`, `COMMERCIAL_DOMAINS.includes`, `isCommercialHostname`, `normalizedHostname2`.

SHA-256 of the source span: `19ac87ba2521cd09241671525a9b3720293aca11b4680afd8810ab3323f883cb`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
