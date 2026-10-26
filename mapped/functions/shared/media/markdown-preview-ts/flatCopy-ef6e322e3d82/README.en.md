# `flatCopy`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `shared/media/markdown-preview.ts` · [Module README](../../../../../modules/shared/media/markdown-preview-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:722133-722135](../../../../../../reference/runtime/host-main.cjs#L722133-L722135) | `FunctionDeclaration` | no | `slice` |
| [evaluation:540110-540112](../../../../../../reference/runtime/sand-eval-runner.cjs#L540110-L540112) | `FunctionDeclaration` | no | `slice` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:722133-722135](../../../../../../reference/runtime/host-main.cjs#L722133-L722135) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:540110-540112](../../../../../../reference/runtime/sand-eval-runner.cjs#L540110-L540112) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:722133

Calls written directly in this body: `.join`, `slice.split`.

SHA-256 of the source span: `dca83918e21124fa85c4e20db5bcb2c2946402b9a95b5fcad0da4281c4e8277a`.

### evaluation:540110

Calls written directly in this body: `.join`, `slice.split`.

SHA-256 of the source span: `dca83918e21124fa85c4e20db5bcb2c2946402b9a95b5fcad0da4281c4e8277a`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
