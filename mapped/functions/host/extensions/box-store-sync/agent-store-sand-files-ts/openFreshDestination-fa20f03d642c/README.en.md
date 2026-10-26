# `openFreshDestination`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/isolation/README.en.md).

**Module:** `host/extensions/box-store-sync/agent-store-sand-files.ts` · [Module README](../../../../../../modules/host/extensions/box-store-sync/agent-store-sand-files-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:474452-474471](../../../../../../../reference/runtime/host-main.cjs#L474452-L474471) | `FunctionDeclaration` | yes | `destPath` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:474452-474471](../../../../../../../reference/runtime/host-main.cjs#L474452-L474471) | 1 | 0 | 4 | 1 | 2 | 1 |

### host:474452

Calls written directly in this body: `handle.close`, `handle.stat`, `handle.truncate`, `info2.isFile`, `new SandBoxStoreSyncError`.

Explicit throw targets: `SandBoxStoreSyncError`, `error64`.

SHA-256 of the source span: `676964915a0abd8e17f021038562f559e79e3d8216e484a6f468d17f7323bb0d`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
