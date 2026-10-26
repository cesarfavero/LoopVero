# `occurrenceLines`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/canvas/edit-canvas-tool.ts` · [Module README](../../../../../../../modules/core/runner/tools/canvas/edit-canvas-tool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:775545-775555](../../../../../../../../reference/runtime/host-main.cjs#L775545-L775555) | `FunctionDeclaration` | no | `{ source, needle }` |
| [evaluation:575189-575199](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L575189-L575199) | `FunctionDeclaration` | no | `{ source, needle }` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:775545-775555](../../../../../../../../reference/runtime/host-main.cjs#L775545-L775555) | 1 | 1 | 0 | 1 | 0 | 0 |
| [evaluation:575189-575199](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L575189-L575199) | 1 | 1 | 0 | 1 | 0 | 0 |

### host:775545

Calls written directly in this body: `lineOf`, `lines2.push`, `source.indexOf`.

Assignment or increment targets: `from2`.

SHA-256 of the source span: `2ca7e2a7d5c5c50cbd3cc99acdd413fd7bde87fd39c69522601cb914651e3193`.

### evaluation:575189

Calls written directly in this body: `lineOf`, `lines2.push`, `source.indexOf`.

Assignment or increment targets: `from2`.

SHA-256 of the source span: `2ca7e2a7d5c5c50cbd3cc99acdd413fd7bde87fd39c69522601cb914651e3193`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).
