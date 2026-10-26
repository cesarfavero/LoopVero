# `createBoxWallpaperCommands/resolvePlan`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/wallpaper/box-wallpaper-commands.ts` · [Module README](../../../../../../modules/host/extensions/wallpaper/box-wallpaper-commands-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:784909-784922](../../../../../../../reference/runtime/host-main.cjs#L784909-L784922) | `FunctionExpression` | yes | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:784909-784922](../../../../../../../reference/runtime/host-main.cjs#L784909-L784922) | 2 | 0 | 1 | 2 | 0 | 0 |

### host:784909

Calls written directly in this body: `.catch`, `options2.log`, `parseTonePlan`, `runCommand3`.

SHA-256 of the source span: `bc8663a2d85558000e75a333f5ff7f3ab352948814f768d67dcdb224105d127e`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
