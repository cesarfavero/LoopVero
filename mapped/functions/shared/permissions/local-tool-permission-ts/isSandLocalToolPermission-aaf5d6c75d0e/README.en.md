# `isSandLocalToolPermission`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/tools/README.en.md).

**Module:** `shared/permissions/local-tool-permission.ts` · [Module README](../../../../../modules/shared/permissions/local-tool-permission-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:485823-485825](../../../../../../reference/runtime/host-main.cjs#L485823-L485825) | `FunctionDeclaration` | no | `value` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:485823-485825](../../../../../../reference/runtime/host-main.cjs#L485823-L485825) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:485823

Calls written directly in this body: `SAND_LOCAL_TOOL_PERMISSIONS.includes`.

SHA-256 of the source span: `dc6a6e92c6591117e55c5d44189cdd1e8bcef7885def5d49c278ac52dee69ac4`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
