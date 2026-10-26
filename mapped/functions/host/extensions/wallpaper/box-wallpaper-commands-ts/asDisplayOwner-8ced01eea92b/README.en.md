# `asDisplayOwner`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/wallpaper/box-wallpaper-commands.ts` · [Module README](../../../../../../modules/host/extensions/wallpaper/box-wallpaper-commands-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:784939-784943](../../../../../../../reference/runtime/host-main.cjs#L784939-L784943) | `FunctionDeclaration` | no | `owner` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:784939-784943](../../../../../../../reference/runtime/host-main.cjs#L784939-L784943) | 1 | 0 | 0 | 2 | 0 | 0 |

### host:784939

Calls written directly in this body: `process.getgid`, `process.getuid`.

SHA-256 of the source span: `b9ee5a2fbe9001e7c3b72ce05203e3e81ae21402f3d48b03c6d4536c650b488d`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
