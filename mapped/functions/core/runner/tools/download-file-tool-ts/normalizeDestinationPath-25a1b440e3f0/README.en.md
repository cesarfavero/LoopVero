# `normalizeDestinationPath`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/download-file-tool.ts` · [Module README](../../../../../../modules/core/runner/tools/download-file-tool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:773806-773821](../../../../../../../reference/runtime/host-main.cjs#L773806-L773821) | `FunctionDeclaration` | no | `raw` |
| [evaluation:573027-573042](../../../../../../../reference/runtime/sand-eval-runner.cjs#L573027-L573042) | `FunctionDeclaration` | no | `raw` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:773806-773821](../../../../../../../reference/runtime/host-main.cjs#L773806-L773821) | 3 | 0 | 0 | 2 | 2 | 0 |
| [evaluation:573027-573042](../../../../../../../reference/runtime/sand-eval-runner.cjs#L573027-L573042) | 3 | 0 | 0 | 2 | 2 | 0 |

### host:773806

Calls written directly in this body: `JSON.stringify`, `import_node_path167.posix.isAbsolute`, `import_node_path167.posix.normalize`, `new SandToolInputError`, `nonEmpty5`, `normalized.endsWith`.

Explicit throw targets: `SandToolInputError`.

SHA-256 of the source span: `c66ca73cf8ee8a16b6d5e8bd284b77c55501353890e84d9c83c263818e163b2d`.

### evaluation:573027

Calls written directly in this body: `JSON.stringify`, `import_node_path38.posix.isAbsolute`, `import_node_path38.posix.normalize`, `new SandToolInputError`, `nonEmpty4`, `normalized.endsWith`.

Explicit throw targets: `SandToolInputError`.

SHA-256 of the source span: `6a43096c559e6d74bb773ebe3ad0990eb5bbf772bb70ae71128b12b4ac047e3f`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
