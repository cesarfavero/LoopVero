# `skillContentEnding`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/skills/README.en.md).

**Module:** `core/runner/tools/skill/skill-tool.ts` · [Module README](../../../../../../../modules/core/runner/tools/skill/skill-tool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:565851-565861](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L565851-L565861) | `FunctionDeclaration` | no | `skill, truncated` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:565851-565861](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L565851-L565861) | 2 | 0 | 0 | 3 | 0 | 0 |

### evaluation:565851

Calls written directly in this body: `import_node_path36.posix.dirname`, `toModelVisibleText`.

SHA-256 of the source span: `6d008366bb658eebdad1b79d32f54b3c2c184440e09d6f4930be9d7900a33d93`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).
