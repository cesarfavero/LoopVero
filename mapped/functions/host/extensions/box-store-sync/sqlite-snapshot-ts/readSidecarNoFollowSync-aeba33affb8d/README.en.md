# `readSidecarNoFollowSync`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/box-store-sync/sqlite-snapshot.ts` · [Module README](../../../../../../modules/host/extensions/box-store-sync/sqlite-snapshot-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:480376-480383](../../../../../../../reference/runtime/host-main.cjs#L480376-L480383) | `FunctionDeclaration` | no | `path33` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:480376-480383](../../../../../../../reference/runtime/host-main.cjs#L480376-L480383) | 1 | 0 | 0 | 2 | 1 | 1 |

### host:480376

Calls written directly in this body: `isMissingPathError`, `readFileNoFollowSync2`.

Explicit throw targets: `error64`.

SHA-256 of the source span: `c8ff15ba7d7a890a63d40d004c6689c46cb07147d0462de0ed070a3b322ad6ad`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
