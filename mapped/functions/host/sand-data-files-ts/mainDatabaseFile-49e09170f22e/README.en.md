# `mainDatabaseFile`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/architecture/README.en.md).

**Module:** `host/sand-data-files.ts` · [Module README](../../../../modules/host/sand-data-files-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:453886-453889](../../../../../reference/runtime/host-main.cjs#L453886-L453889) | `FunctionDeclaration` | no | `db` |
| [state-worker:539-542](../../../../../reference/runtime/workers/state/agent-store-worker.cjs#L539-L542) | `FunctionDeclaration` | no | `db` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:453886-453889](../../../../../reference/runtime/host-main.cjs#L453886-L453889) | 1 | 0 | 0 | 1 | 0 | 0 |
| [state-worker:539-542](../../../../../reference/runtime/workers/state/agent-store-worker.cjs#L539-L542) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:453886

Calls written directly in this body: `.get`, `db.prepare`.

SHA-256 of the source span: `6f1e3727ba5bffeb7ad0bdf2e281826b462044747f35acbe622f720aaf03c60b`.

### state-worker:539

Calls written directly in this body: `.get`, `db.prepare`.

SHA-256 of the source span: `2696e521b285f6c754b079cccdfe870015ef9792cfc4c4376e3d04d4e86ad19f`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
