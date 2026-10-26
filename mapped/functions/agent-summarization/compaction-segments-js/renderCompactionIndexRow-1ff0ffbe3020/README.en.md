# `renderCompactionIndexRow`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/components/context-compaction/README.en.md).

**Module:** `agent-summarization/compaction-segments.js` · [Module README](../../../../modules/agent-summarization/compaction-segments-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:617136-617140](../../../../../reference/runtime/host-main.cjs#L617136-L617140) | `FunctionDeclaration` | no | `{ index, turnCount, approxBytes, keywords: keywords2 }` |
| [evaluation:285676-285680](../../../../../reference/runtime/sand-eval-runner.cjs#L285676-L285680) | `FunctionDeclaration` | no | `{ index, turnCount, approxBytes, keywords: keywords2 }` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:617136-617140](../../../../../reference/runtime/host-main.cjs#L617136-L617140) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:285676-285680](../../../../../reference/runtime/sand-eval-runner.cjs#L285676-L285680) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:617136

Calls written directly in this body: `.join`, `compactionSegmentFilename`, `keywords2.map`, `segmentLabel`.

SHA-256 of the source span: `452b563efea6ff1f5aee837a497b04cfafc934f3a92b552847ae7c6b898c2eb5`.

### evaluation:285676

Calls written directly in this body: `.join`, `compactionSegmentFilename`, `keywords2.map`, `segmentLabel`.

SHA-256 of the source span: `452b563efea6ff1f5aee837a497b04cfafc934f3a92b552847ae7c6b898c2eb5`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
