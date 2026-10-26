# `normalizedMemoryFilePath`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/memory/README.en.md).

**Module:** `core/runner/tools/recall-memory-tool.ts` · [Module README](../../../../../../modules/core/runner/tools/recall-memory-tool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:769761-769767](../../../../../../../reference/runtime/host-main.cjs#L769761-L769767) | `FunctionDeclaration` | no | `raw` |
| [evaluation:565430-565436](../../../../../../../reference/runtime/sand-eval-runner.cjs#L565430-L565436) | `FunctionDeclaration` | no | `raw` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:769761-769767](../../../../../../../reference/runtime/host-main.cjs#L769761-L769767) | 2 | 1 | 0 | 1 | 0 | 0 |
| [evaluation:565430-565436](../../../../../../../reference/runtime/sand-eval-runner.cjs#L565430-L565436) | 2 | 1 | 0 | 1 | 0 | 0 |

### host:769761

Calls written directly in this body: `.replace`, `file2.endsWith`, `file2.slice`, `file2.startsWith`, `raw.trim`.

Assignment or increment targets: `file2`.

SHA-256 of the source span: `6287ab49d71c2d5bda0e2da905450de017e9355a298e62214f281ccc036da0f7`.

### evaluation:565430

Calls written directly in this body: `.replace`, `file2.endsWith`, `file2.slice`, `file2.startsWith`, `raw.trim`.

Assignment or increment targets: `file2`.

SHA-256 of the source span: `f94a058a9fb7eeb4bd50856976ce50d7a8f69d3b02cd68e37d3a877a6e082311`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
