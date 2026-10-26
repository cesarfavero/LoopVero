# `memoryFactsByMostRecent`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/memory/README.en.md).

**Module:** `core/runner/memory-file-format.ts` · [Module README](../../../../../modules/core/runner/memory-file-format-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:702826-702829](../../../../../../reference/runtime/host-main.cjs#L702826-L702829) | `FunctionDeclaration` | no | `a, b2` |
| [evaluation:536573-536576](../../../../../../reference/runtime/sand-eval-runner.cjs#L536573-L536576) | `FunctionDeclaration` | no | `a, b2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:702826-702829](../../../../../../reference/runtime/host-main.cjs#L702826-L702829) | 1 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:536573-536576](../../../../../../reference/runtime/sand-eval-runner.cjs#L536573-L536576) | 1 | 0 | 0 | 2 | 0 | 0 |

### host:702826

Calls written directly in this body: no calls identifiable by name.

SHA-256 of the source span: `a077b2b2b8cb85ce4bdb6da046dea61a94721738357c2d5b5628ad67664215e8`.

### evaluation:536573

Calls written directly in this body: no calls identifiable by name.

SHA-256 of the source span: `a077b2b2b8cb85ce4bdb6da046dea61a94721738357c2d5b5628ad67664215e8`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
