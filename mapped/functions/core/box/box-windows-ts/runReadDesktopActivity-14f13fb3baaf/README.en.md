# `runReadDesktopActivity`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `core/box/box-windows.ts` · [Module README](../../../../../modules/core/box/box-windows-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:554125-554146](../../../../../../reference/runtime/host-main.cjs#L554125-L554146) | `FunctionDeclaration` | yes | `ctx, accessor, windowIndexes` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:554125-554146](../../../../../../reference/runtime/host-main.cjs#L554125-L554146) | 2 | 0 | 1 | 1 | 2 | 0 |

### host:554125

Calls written directly in this body: `.execute`, `accessor.get`, `buildHostShellArgs`, `desktopActivityCommand`, `new SandBoxWindowError`, `parseDesktopActivity`, `windowIndexes.filter`.

Explicit throw targets: `SandBoxWindowError`.

SHA-256 of the source span: `597abcb1b611526c9f392fd7b0d72fba5a0f5180af2c60c4649b2a99fdfe35c4`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
