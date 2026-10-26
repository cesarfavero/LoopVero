# `sandIsolatedDeploymentOf/isInDeploymentZone`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `shared/node/cursor-backend/isolated-deployment.ts` · [Module README](../../../../../../modules/shared/node/cursor-backend/isolated-deployment-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:451616-451616](../../../../../../../reference/runtime/host-main.cjs#L451616-L451616) | `ArrowFunctionExpression` | no | `url2` |
| [evaluation:597162-597162](../../../../../../../reference/runtime/sand-eval-runner.cjs#L597162-L597162) | `ArrowFunctionExpression` | no | `url2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:451616-451616](../../../../../../../reference/runtime/host-main.cjs#L451616-L451616) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at host:451616 uses an implicit arrow-function return.
| [evaluation:597162-597162](../../../../../../../reference/runtime/sand-eval-runner.cjs#L597162-L597162) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at evaluation:597162 uses an implicit arrow-function return.

### host:451616

Calls written directly in this body: `.endsWith`, `httpProtocolOf`, `normalizedHostname`.

SHA-256 of the source span: `7cafac6d085118c43e45ae74f7d2d38abe69d490f6d272a9f512e463298cb831`.

### evaluation:597162

Calls written directly in this body: `.endsWith`, `httpProtocolOf`, `normalizedHostname2`.

SHA-256 of the source span: `843c40248e98d8ec5ba8f3ec526384a6beb4fc22251f20c9325edd64da1f7437`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
