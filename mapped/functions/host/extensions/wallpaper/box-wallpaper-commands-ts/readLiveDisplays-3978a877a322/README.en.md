# `readLiveDisplays`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/wallpaper/box-wallpaper-commands.ts` · [Module README](../../../../../../modules/host/extensions/wallpaper/box-wallpaper-commands-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:784888-784901](../../../../../../../reference/runtime/host-main.cjs#L784888-L784901) | `FunctionDeclaration` | yes | `socketDir` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:784888-784901](../../../../../../../reference/runtime/host-main.cjs#L784888-L784901) | 1 | 1 | 1 | 1 | 0 | 0 |

### host:784888

Calls written directly in this body: `.catch`, `.sort`, `displays.push`, `entries.flatMap`, `stats.isSocket`.

SHA-256 of the source span: `81b59813d18ca5b940d877e75303158675f837700cb03498983953468408392a`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
