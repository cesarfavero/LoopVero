# `sandBackendIdentityOf/originBackendUrl`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `shared/node/cursor-backend/process-environment.ts` · [Module README](../../../../../../modules/shared/node/cursor-backend/process-environment-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:451655-451657](../../../../../../../reference/runtime/host-main.cjs#L451655-L451657) | `FunctionExpression` | no | `(none)` |
| [evaluation:597201-597203](../../../../../../../reference/runtime/sand-eval-runner.cjs#L597201-L597203) | `FunctionExpression` | no | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:451655-451657](../../../../../../../reference/runtime/host-main.cjs#L451655-L451657) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:597201-597203](../../../../../../../reference/runtime/sand-eval-runner.cjs#L597201-L597203) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:451655

Calls written directly in this body: `readOriginBackendUrl`.

SHA-256 of the source span: `73417daf92959e74928a901e489b4e15b04978b8f448fa91ff410b4a2ab128a8`.

### evaluation:597201

Calls written directly in this body: `readOriginBackendUrl`.

SHA-256 of the source span: `73417daf92959e74928a901e489b4e15b04978b8f448fa91ff410b4a2ab128a8`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
