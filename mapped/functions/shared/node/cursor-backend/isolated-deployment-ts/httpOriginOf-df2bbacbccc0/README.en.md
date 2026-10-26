# `httpOriginOf`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `shared/node/cursor-backend/isolated-deployment.ts` · [Module README](../../../../../../modules/shared/node/cursor-backend/isolated-deployment-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:451570-451572](../../../../../../../reference/runtime/host-main.cjs#L451570-L451572) | `FunctionDeclaration` | no | `url2` |
| [evaluation:597116-597118](../../../../../../../reference/runtime/sand-eval-runner.cjs#L597116-L597118) | `FunctionDeclaration` | no | `url2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:451570-451572](../../../../../../../reference/runtime/host-main.cjs#L451570-L451572) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:597116-597118](../../../../../../../reference/runtime/sand-eval-runner.cjs#L597116-L597118) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:451570

Calls written directly in this body: `httpProtocolOf`.

SHA-256 of the source span: `75c97244e75dbdfe18fdc92b57f46cfeaafb5f0d89a5981574d055001d4fb847`.

### evaluation:597116

Calls written directly in this body: `httpProtocolOf`.

SHA-256 of the source span: `75c97244e75dbdfe18fdc92b57f46cfeaafb5f0d89a5981574d055001d4fb847`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
