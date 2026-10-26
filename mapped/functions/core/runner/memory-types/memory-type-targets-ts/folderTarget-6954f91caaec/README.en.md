# `folderTarget`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/memory/README.en.md).

**Module:** `core/runner/memory-types/memory-type-targets.ts` · [Module README](../../../../../../modules/core/runner/memory-types/memory-type-targets-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:771561-771592](../../../../../../../reference/runtime/host-main.cjs#L771561-L771592) | `FunctionDeclaration` | no | `{   memoryType,   audience,   story,   meta: meta3,   teamBot }` |
| [evaluation:570794-570825](../../../../../../../reference/runtime/sand-eval-runner.cjs#L570794-L570825) | `FunctionDeclaration` | no | `{   memoryType,   audience,   story,   meta: meta3,   teamBot }` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:771561-771592](../../../../../../../reference/runtime/host-main.cjs#L771561-L771592) | 6 | 0 | 0 | 7 | 0 | 0 |
| [evaluation:570794-570825](../../../../../../../reference/runtime/sand-eval-runner.cjs#L570794-L570825) | 6 | 0 | 0 | 7 | 0 | 0 |

### host:771561

Calls written directly in this body: `memoryTypeFilePath`, `refused3`, `target`.

SHA-256 of the source span: `241699635c5697410efb5bc25a179a37103f9d916e76c8d0ed24fd04d6c1a030`.

### evaluation:570794

Calls written directly in this body: `memoryTypeFilePath`, `refused3`, `target`.

SHA-256 of the source span: `241699635c5697410efb5bc25a179a37103f9d916e76c8d0ed24fd04d6c1a030`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
