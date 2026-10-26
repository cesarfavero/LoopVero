# `searchTranscripts`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/transcripts/README.en.md).

**Module:** `core/runner/tools/transcript-search/transcript-search-tools.ts` · [Module README](../../../../../../../modules/core/runner/tools/transcript-search/transcript-search-tools-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:771377-771390](../../../../../../../../reference/runtime/host-main.cjs#L771377-L771390) | `FunctionDeclaration` | yes | `ctx, search, args` |
| [evaluation:570611-570624](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L570611-L570624) | `FunctionDeclaration` | yes | `ctx, search, args` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:771377-771390](../../../../../../../../reference/runtime/host-main.cjs#L771377-L771390) | 1 | 0 | 2 | 2 | 0 | 0 |
| [evaluation:570611-570624](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L570611-L570624) | 1 | 0 | 2 | 2 | 0 | 0 |

### host:771377

Calls written directly in this body: `Math.min`, `args.query.trim`, `loaded.search`, `renderTranscriptSearch`, `search.load`.

SHA-256 of the source span: `82618a0c8cfc88a6b484f40c9551d3950d4b72df30ae00f39eeb18c174a0a3a7`.

### evaluation:570611

Calls written directly in this body: `Math.min`, `args.query.trim`, `loaded.search`, `renderTranscriptSearch`, `search.load`.

SHA-256 of the source span: `82618a0c8cfc88a6b484f40c9551d3950d4b72df30ae00f39eeb18c174a0a3a7`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).
