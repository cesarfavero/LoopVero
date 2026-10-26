# `isAbsoluteFixturePath`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `core/evals/user-machine-fixtures.ts` · [Module README](../../../../../modules/core/evals/user-machine-fixtures-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:596255-596257](../../../../../../reference/runtime/sand-eval-runner.cjs#L596255-L596257) | `FunctionDeclaration` | no | `path33` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:596255-596257](../../../../../../reference/runtime/sand-eval-runner.cjs#L596255-L596257) | 0 | 0 | 0 | 1 | 0 | 0 |

### evaluation:596255

Calls written directly in this body: `WINDOWS_DRIVE_ROOT.test`, `import_node_path43.posix.isAbsolute`.

SHA-256 of the source span: `6240a50c0a809a0b0a3116999f07d820402efaa55265fe1c3ffe2e9efd2230c2`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
