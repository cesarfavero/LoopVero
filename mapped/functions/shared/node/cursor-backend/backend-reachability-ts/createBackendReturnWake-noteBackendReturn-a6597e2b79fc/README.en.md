# `createBackendReturnWake/noteBackendReturn`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `shared/node/cursor-backend/backend-reachability.ts` · [Module README](../../../../../../modules/shared/node/cursor-backend/backend-reachability-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:711302-711311](../../../../../../../reference/runtime/host-main.cjs#L711302-L711311) | `FunctionExpression` | no | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:711302-711311](../../../../../../../reference/runtime/host-main.cjs#L711302-L711311) | 2 | 0 | 0 | 2 | 0 | 0 |

### host:711302

Calls written directly in this body: `clock.schedule`, `random`, `wait2.controller.abort`.

Assignment or increment targets: `wait2.wake`.

SHA-256 of the source span: `39e6ed043f42542a33e173b99aa5381a263147eb40a3ab953119c026763f17d3`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
