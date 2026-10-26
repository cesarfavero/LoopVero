# `WallpaperToneScheduler.sync`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/wallpaper/wallpaper-service.ts` · [Module README](../../../../../../modules/host/extensions/wallpaper/wallpaper-service-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:784997-785015](../../../../../../../reference/runtime/host-main.cjs#L784997-L785015) | `method` | yes | `generation` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:784997-785015](../../../../../../../reference/runtime/host-main.cjs#L784997-L785015) | 3 | 0 | 2 | 3 | 0 | 0 |

### host:784997

Calls written directly in this body: `Math.max`, `Math.round`, `this.armWake`, `this.deps.clock.monotonicNow`, `this.deps.log`, `this.deps.paint`, `this.deps.resolvePlan`, `this.isStale`.

SHA-256 of the source span: `3110324f5f8bcef82ea941ce61c8a0019af2eb951ea3e14073d03558229029e4`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
