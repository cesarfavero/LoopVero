# `chownSandDataEntrySync`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/architecture/README.en.md).

**Module:** `host/sand-data-files.ts` · [Module README](../../../../modules/host/sand-data-files-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:453963-453968](../../../../../reference/runtime/host-main.cjs#L453963-L453968) | `FunctionDeclaration` | no | `target, uid, gid` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:453963-453968](../../../../../reference/runtime/host-main.cjs#L453963-L453968) | 0 | 0 | 0 | 0 | 0 | 0 |

### host:453963

Calls written directly in this body: `withParentNoFollowSync`.

SHA-256 of the source span: `fc23d46c14997ab0826869a73daa5011d157ad06bb1a74a1baee7700ff04d194`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
