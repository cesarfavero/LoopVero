# `readTranscriptFile`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/transcripts/README.en.md).

**Module:** `core/runner/tools/transcript-search/transcript-search-tools.ts` · [Module README](../../../../../../../modules/core/runner/tools/transcript-search/transcript-search-tools-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:771417-771439](../../../../../../../../reference/runtime/host-main.cjs#L771417-L771439) | `FunctionDeclaration` | yes | `ctx, search, args` |
| [evaluation:570651-570673](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L570651-L570673) | `FunctionDeclaration` | yes | `ctx, search, args` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:771417-771439](../../../../../../../../reference/runtime/host-main.cjs#L771417-L771439) | 5 | 0 | 1 | 2 | 1 | 0 |
| [evaluation:570651-570673](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L570651-L570673) | 5 | 0 | 1 | 2 | 1 | 0 |

### host:771417

Calls written directly in this body: `.join`, `.sort`, `Math.min`, `String`, `args.path.trim`, `known.slice`, `loaded.files.get`, `loaded.files.keys`, `new SandModelVisibleError`, `renderTranscriptFilePage`, `resolveFilePath`, `search.load`.

Explicit throw targets: `SandModelVisibleError`.

SHA-256 of the source span: `2d6f3bd2719fb5def8733ad20f68013db2fb6308c695644b812edaa6a510e7de`.

### evaluation:570651

Calls written directly in this body: `.join`, `.sort`, `Math.min`, `String`, `args.path.trim`, `known.slice`, `loaded.files.get`, `loaded.files.keys`, `new SandModelVisibleError`, `renderTranscriptFilePage`, `resolveFilePath`, `search.load`.

Explicit throw targets: `SandModelVisibleError`.

SHA-256 of the source span: `2d6f3bd2719fb5def8733ad20f68013db2fb6308c695644b812edaa6a510e7de`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).
