# `observeShellTerminal`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `core/box/background-shell-reporting.ts` · [Module README](../../../../../modules/core/box/background-shell-reporting-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:590354-590408](../../../../../../reference/runtime/host-main.cjs#L590354-L590408) | `FunctionDeclaration` | no | `registry3, accessor, terminalsFolder, keepAwakeCapMs, sighting` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:590354-590408](../../../../../../reference/runtime/host-main.cjs#L590354-L590408) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:590354

Calls written directly in this body: `.some`, `encodeBackgroundWorkMetadata`, `registry3.listWork`, `registry3.upsertWork`, `sandTerminalFilePath`.

SHA-256 of the source span: `c9ac810ddfe1d6decdfd06e6bd3eb41f2b11205697e7c5e81ac47b500eea643b`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
