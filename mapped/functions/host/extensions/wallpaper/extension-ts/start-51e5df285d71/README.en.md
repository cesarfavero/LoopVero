# `start`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/wallpaper/extension.ts` · [Module README](../../../../../../modules/host/extensions/wallpaper/extension-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:785033-785050](../../../../../../../reference/runtime/host-main.cjs#L785033-L785050) | `ArrowFunctionExpression` | no | `context2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:785033-785050](../../../../../../../reference/runtime/host-main.cjs#L785033-L785050) | 1 | 0 | 0 | 2 | 0 | 0 |

### host:785033

Calls written directly in this body: `context2.onStop`, `createBoxWallpaperCommands`, `new WallpaperToneScheduler`, `scheduler.start`, `settings.getSettingsPath`.

SHA-256 of the source span: `9c906e4f9023d00f7bdc2a38f5645b9701d841bc9042f69409274d97768cfb14`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
