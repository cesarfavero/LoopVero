# `liveDbHandleCount`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `host/storage/store-db.ts` · [Module README](../../../../../modules/host/storage/store-db-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:478880-478882](../../../../../../reference/runtime/host-main.cjs#L478880-L478882) | `FunctionDeclaration` | no | `resolvedDbPath` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:478880-478882](../../../../../../reference/runtime/host-main.cjs#L478880-L478882) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:478880

Calls written directly in this body: `liveDbHandlesByPath.get`.

SHA-256 of the source span: `c20c3859a9b5d3640fa79913063a224156f3e849b33ecedbe16035c5f24ec277`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
