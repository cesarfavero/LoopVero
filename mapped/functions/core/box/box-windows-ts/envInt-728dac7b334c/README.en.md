# `envInt`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `core/box/box-windows.ts` · [Module README](../../../../../modules/core/box/box-windows-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:553839-553844](../../../../../../reference/runtime/host-main.cjs#L553839-L553844) | `FunctionDeclaration` | no | `name18, fallback3` |
| [evaluation:534040-534045](../../../../../../reference/runtime/sand-eval-runner.cjs#L534040-L534045) | `FunctionDeclaration` | no | `name18, fallback2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:553839-553844](../../../../../../reference/runtime/host-main.cjs#L553839-L553844) | 2 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:534040-534045](../../../../../../reference/runtime/sand-eval-runner.cjs#L534040-L534045) | 2 | 0 | 0 | 2 | 0 | 0 |

### host:553839

Calls written directly in this body: `Number.isInteger`, `Number.parseInt`, `raw.trim`.

SHA-256 of the source span: `7bd7b08966800732b06e4d1ea0c33df1d14432b5ecb99c1150bfaf20eb0b8553`.

### evaluation:534040

Calls written directly in this body: `Number.isInteger`, `Number.parseInt`, `raw.trim`.

SHA-256 of the source span: `478aefd1fde6f1d82413f35b88653882fe1e467a1b61553ae0866ed20d13c06f`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
