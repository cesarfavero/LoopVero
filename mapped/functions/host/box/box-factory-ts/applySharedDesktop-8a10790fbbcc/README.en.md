# `applySharedDesktop`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `host/box/box-factory.ts` · [Module README](../../../../../modules/host/box/box-factory-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:679621-679624](../../../../../../reference/runtime/host-main.cjs#L679621-L679624) | `FunctionDeclaration` | no | `box, options2 = {}` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:679621-679624](../../../../../../reference/runtime/host-main.cjs#L679621-L679624) | 1 | 0 | 0 | 2 | 0 | 0 |

### host:679621

Calls written directly in this body: `boxMaxWindows`, `new SharedDesktopSandBox`.

SHA-256 of the source span: `c3858d0cc15a5abf7e88c009116f587d275cb04ced75d3bb7f87a9ae5a19408a`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
