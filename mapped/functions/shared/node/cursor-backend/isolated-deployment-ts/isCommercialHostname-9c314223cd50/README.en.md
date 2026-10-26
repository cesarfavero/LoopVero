# `isCommercialHostname`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `shared/node/cursor-backend/isolated-deployment.ts` · [Module README](../../../../../../modules/shared/node/cursor-backend/isolated-deployment-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:451559-451562](../../../../../../../reference/runtime/host-main.cjs#L451559-L451562) | `FunctionDeclaration` | no | `hostname4` |
| [evaluation:597105-597108](../../../../../../../reference/runtime/sand-eval-runner.cjs#L597105-L597108) | `FunctionDeclaration` | no | `hostname3` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:451559-451562](../../../../../../../reference/runtime/host-main.cjs#L451559-L451562) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:597105-597108](../../../../../../../reference/runtime/sand-eval-runner.cjs#L597105-L597108) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:451559

Calls written directly in this body: `COMMERCIAL_DOMAINS.some`, `normalizedHostname`.

SHA-256 of the source span: `f4cd374db4e8a9c306050e19de2ce5dbb4db69b778de2837144c7d98e9ce9950`.

### evaluation:597105

Calls written directly in this body: `COMMERCIAL_DOMAINS.some`, `normalizedHostname2`.

SHA-256 of the source span: `21f5d44bce67173ce98831949a45a321bbea2af6f7337db5fb6e8504c22c2232`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
