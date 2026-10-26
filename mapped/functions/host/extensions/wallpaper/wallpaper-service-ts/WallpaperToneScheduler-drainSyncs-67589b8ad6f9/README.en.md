# `WallpaperToneScheduler.drainSyncs`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/wallpaper/wallpaper-service.ts` · [Module README](../../../../../../modules/host/extensions/wallpaper/wallpaper-service-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:784978-784992](../../../../../../../reference/runtime/host-main.cjs#L784978-L784992) | `method` | yes | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:784978-784992](../../../../../../../reference/runtime/host-main.cjs#L784978-L784992) | 1 | 1 | 1 | 0 | 0 | 1 |

### host:784978

Calls written directly in this body: `errorLogTag`, `this.armWake`, `this.deps.log`, `this.sync`.

Assignment or increment targets: `synced`, `this.syncing`.

SHA-256 of the source span: `c39a82faca7d3de56f85497669ba75333cfc9a723958b918218f4abe3e51302a`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
