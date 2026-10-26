# `normalizeSourcePath`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/upload-file-tool.ts` · [Module README](../../../../../../modules/core/runner/tools/upload-file-tool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:774642-774656](../../../../../../../reference/runtime/host-main.cjs#L774642-L774656) | `FunctionDeclaration` | no | `raw` |
| [evaluation:574245-574259](../../../../../../../reference/runtime/sand-eval-runner.cjs#L574245-L574259) | `FunctionDeclaration` | no | `raw` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:774642-774656](../../../../../../../reference/runtime/host-main.cjs#L774642-L774656) | 3 | 0 | 0 | 1 | 3 | 0 |
| [evaluation:574245-574259](../../../../../../../reference/runtime/sand-eval-runner.cjs#L574245-L574259) | 3 | 0 | 0 | 1 | 3 | 0 |

### host:774642

Calls written directly in this body: `JSON.stringify`, `import_node_path168.posix.isAbsolute`, `import_node_path168.posix.normalize`, `new SandToolInputError`, `normalized.endsWith`, `raw.includes`.

Explicit throw targets: `SandToolInputError`.

SHA-256 of the source span: `df47a810b443930d418de1dd949213048eb654e5009acf9f249406854bb38a46`.

### evaluation:574245

Calls written directly in this body: `JSON.stringify`, `import_node_path39.posix.isAbsolute`, `import_node_path39.posix.normalize`, `new SandToolInputError`, `normalized.endsWith`, `raw.includes`.

Explicit throw targets: `SandToolInputError`.

SHA-256 of the source span: `82d9263e21a297e3fe3644ffbf91b7db7010b281b1e641aa14c0dfa9366001ff`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
