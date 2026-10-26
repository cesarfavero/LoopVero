# `reachableOriginsOf`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `shared/node/cursor-backend/isolated-deployment.ts` · [Module README](../../../../../../modules/shared/node/cursor-backend/isolated-deployment-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:451578-451585](../../../../../../../reference/runtime/host-main.cjs#L451578-L451585) | `FunctionDeclaration` | no | `urls` |
| [evaluation:597124-597131](../../../../../../../reference/runtime/sand-eval-runner.cjs#L597124-L597131) | `FunctionDeclaration` | no | `urls` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:451578-451585](../../../../../../../reference/runtime/host-main.cjs#L451578-L451585) | 2 | 1 | 0 | 1 | 0 | 0 |
| [evaluation:597124-597131](../../../../../../../reference/runtime/sand-eval-runner.cjs#L597124-L597131) | 2 | 1 | 0 | 1 | 0 | 0 |

### host:451578

Calls written directly in this body: `URL.parse`, `httpOriginOf`, `new Set`, `origins.add`, `raw.trim`.

SHA-256 of the source span: `bdbd85c1ebf56d1759726b55f6205d8e7f1a0b67ebb0ec0954c2e8a37d2b02b7`.

### evaluation:597124

Calls written directly in this body: `URL.parse`, `httpOriginOf`, `new Set`, `origins.add`, `raw.trim`.

SHA-256 of the source span: `946939a5497801b364b1eef09803215f8e49dee2a4148e3430b1b3a34d2de36a`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
