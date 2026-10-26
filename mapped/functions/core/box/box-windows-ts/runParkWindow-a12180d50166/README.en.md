# `runParkWindow`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `core/box/box-windows.ts` · [Module README](../../../../../modules/core/box/box-windows-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:554029-554073](../../../../../../reference/runtime/host-main.cjs#L554029-L554073) | `FunctionDeclaration` | yes | `ctx, accessor, windowIndex, ownerToken, opts` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:554029-554073](../../../../../../reference/runtime/host-main.cjs#L554029-L554073) | 6 | 0 | 1 | 2 | 5 | 0 |

### host:554029

Calls written directly in this body: `.execute`, `BOX_FILE_PATH_PATTERN.test`, `Number.isInteger`, `PARK_OUTCOME_BY_EXIT_CODE.get`, `SAND_BOX_WINDOW_OWNER_TOKEN_PATTERN.test`, `accessor.get`, `buildHostShellArgs`, `isPrimaryWindowIndex`, `new SandBoxParkWindowError`, `parkWindowCommand`.

Explicit throw targets: `SandBoxParkWindowError`.

SHA-256 of the source span: `87ab0b7295630c4fa3319270ef1221fbfb4b57497510d149032465ec2291d30a`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
