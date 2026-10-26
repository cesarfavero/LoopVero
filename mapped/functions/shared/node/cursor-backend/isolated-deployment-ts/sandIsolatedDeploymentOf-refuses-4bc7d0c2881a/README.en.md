# `sandIsolatedDeploymentOf/refuses`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `shared/node/cursor-backend/isolated-deployment.ts` · [Module README](../../../../../../modules/shared/node/cursor-backend/isolated-deployment-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:451619-451623](../../../../../../../reference/runtime/host-main.cjs#L451619-L451623) | `ArrowFunctionExpression` | no | `url2` |
| [evaluation:597165-597169](../../../../../../../reference/runtime/sand-eval-runner.cjs#L597165-L597169) | `ArrowFunctionExpression` | no | `url2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:451619-451623](../../../../../../../reference/runtime/host-main.cjs#L451619-L451623) | 2 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:597165-597169](../../../../../../../reference/runtime/sand-eval-runner.cjs#L597165-L597169) | 2 | 0 | 0 | 2 | 0 | 0 |

### host:451619

Calls written directly in this body: `URL.parse`, `httpOriginOf`, `isCommercialHostname`, `isInDeploymentZone`, `reachable.has`.

SHA-256 of the source span: `66acb515e2f23891de1936eb7ceaaedad0e16a4086902e7e544f50f4b74a60bb`.

### evaluation:597165

Calls written directly in this body: `URL.parse`, `httpOriginOf`, `isCommercialHostname`, `isInDeploymentZone`, `reachable.has`.

SHA-256 of the source span: `605bef138221ffaa6aa31aa7a53e89e14050c4d5529e92c6056ae33a0a633dd1`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
