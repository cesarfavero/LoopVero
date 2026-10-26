# `checkSandDataDatabaseSync`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/architecture/README.en.md).

**Module:** `host/sand-data-files.ts` · [Module README](../../../../modules/host/sand-data-files-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:453877-453885](../../../../../reference/runtime/host-main.cjs#L453877-L453885) | `FunctionDeclaration` | no | `db, target` |
| [state-worker:530-538](../../../../../reference/runtime/workers/state/agent-store-worker.cjs#L530-L538) | `FunctionDeclaration` | no | `db, target` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:453877-453885](../../../../../reference/runtime/host-main.cjs#L453877-L453885) | 0 | 0 | 0 | 0 | 0 | 0 |
| [state-worker:530-538](../../../../../reference/runtime/workers/state/agent-store-worker.cjs#L530-L538) | 0 | 0 | 0 | 0 | 0 | 0 |

### host:453877

Calls written directly in this body: `withParentNoFollowSync`.

SHA-256 of the source span: `9c580f303e05de7fdfbbde9d7561e1a7f8fe2f8958ed83cd013b846f43f9972a`.

### state-worker:530

Calls written directly in this body: `withParentNoFollowSync`.

SHA-256 of the source span: `fac8a7b3c1d98cbd77de8b7de2af63e8f70d41cf92f6daacb10cd7c8c25cf1e8`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
