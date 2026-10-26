# `normalizeFixturePath`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `core/evals/user-machine-fixtures.ts` · [Module README](../../../../../modules/core/evals/user-machine-fixtures-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:596258-596270](../../../../../../reference/runtime/sand-eval-runner.cjs#L596258-L596270) | `FunctionDeclaration` | no | `path33, homeDir` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:596258-596270](../../../../../../reference/runtime/sand-eval-runner.cjs#L596258-L596270) | 6 | 0 | 0 | 1 | 0 | 0 |

### evaluation:596258

Calls written directly in this body: `.replaceAll`, `WINDOWS_DRIVE_ROOT.test`, `homeDir.trim`, `import_node_path43.posix.join`, `import_node_path43.posix.normalize`, `isAbsoluteFixturePath`, `path33.trim`, `resolved.replace`, `resolved.slice`, `resolved.startsWith`, `resolved.toLowerCase`.

Assignment or increment targets: `resolved`.

SHA-256 of the source span: `a05220dcd33f35bb50aa569caee5dc33d7b6b3ff09f9a6393580104a5677d02d`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
