# `refuseSandDataDatabaseLinksSync`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/architecture/README.en.md).

**Module:** `host/sand-data-files.ts` · [Module README](../../../../modules/host/sand-data-files-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:453873-453876](../../../../../reference/runtime/host-main.cjs#L453873-L453876) | `FunctionDeclaration` | no | `target` |
| [state-worker:526-529](../../../../../reference/runtime/workers/state/agent-store-worker.cjs#L526-L529) | `FunctionDeclaration` | no | `target` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:453873-453876](../../../../../reference/runtime/host-main.cjs#L453873-L453876) | 0 | 0 | 0 | 0 | 0 | 0 |
| [state-worker:526-529](../../../../../reference/runtime/workers/state/agent-store-worker.cjs#L526-L529) | 0 | 0 | 0 | 0 | 0 | 0 |

### host:453873

Calls written directly in this body: `withParentNoFollowSync`.

SHA-256 of the source span: `192ddab6d40232c7cdc64037bc240c53bdc3bcd98eb5c18f8fe84956a3fed054`.

### state-worker:526

Calls written directly in this body: `withParentNoFollowSync`.

SHA-256 of the source span: `cf4497ec8af4d89cb6b615485be10646d5a1abbd704235dbbed0a07d12f8fcbd`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
