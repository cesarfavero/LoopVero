# `runWindowOwnerCheck`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `core/box/box-windows.ts` · [Module README](../../../../../modules/core/box/box-windows-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:554147-554167](../../../../../../reference/runtime/host-main.cjs#L554147-L554167) | `FunctionDeclaration` | yes | `ctx, accessor, windowIndex, ownerToken` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:554147-554167](../../../../../../reference/runtime/host-main.cjs#L554147-L554167) | 2 | 0 | 1 | 2 | 1 | 0 |

### host:554147

Calls written directly in this body: `SAND_BOX_WINDOW_OWNER_TOKEN_PATTERN.test`, `accessor.get`, `buildHostShellArgs`, `isPrimaryWindowIndex`, `new SandBoxWindowError`, `readWindowToken`, `shell.execute`, `underWindowLock`.

Explicit throw targets: `SandBoxWindowError`.

SHA-256 of the source span: `724384fc70b3d06ec26a9945e68fe0ce13dd4c1c556fe2c13f0b8a6f5fac4964`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
