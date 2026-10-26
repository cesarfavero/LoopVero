# `userDesktopInputSchema`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/turn-builders/user-desktop-tools.ts` · [Module README](../../../../../../../modules/core/runner/tools/turn-builders/user-desktop-tools-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:781826-781835](../../../../../../../../reference/runtime/host-main.cjs#L781826-L781835) | `FunctionDeclaration` | no | `{ name: name18, inputSchema }` |
| [evaluation:582171-582180](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L582171-L582180) | `FunctionDeclaration` | no | `{ name: name18, inputSchema }` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:781826-781835](../../../../../../../../reference/runtime/host-main.cjs#L781826-L781835) | 2 | 0 | 0 | 1 | 1 | 0 |
| [evaluation:582171-582180](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L582171-L582180) | 2 | 0 | 0 | 1 | 1 | 0 |

### host:781826

Calls written directly in this body: `JSON.parse`, `JSON.stringify`, `isUnknownRecord2`, `new Error`.

Explicit throw targets: `Error`.

SHA-256 of the source span: `834df624c920a1be4e061073aab5bcb19d063de7f2ca31b39229039d029d7983`.

### evaluation:582171

Calls written directly in this body: `JSON.parse`, `JSON.stringify`, `isUnknownRecord2`, `new Error`.

Explicit throw targets: `Error`.

SHA-256 of the source span: `834df624c920a1be4e061073aab5bcb19d063de7f2ca31b39229039d029d7983`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).
