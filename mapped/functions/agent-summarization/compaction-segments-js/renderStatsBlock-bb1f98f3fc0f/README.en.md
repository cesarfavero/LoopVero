# `renderStatsBlock`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/components/context-compaction/README.en.md).

**Module:** `agent-summarization/compaction-segments.js` · [Module README](../../../../modules/agent-summarization/compaction-segments-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:616999-617022](../../../../../reference/runtime/host-main.cjs#L616999-L617022) | `FunctionDeclaration` | no | `stats` |
| [evaluation:285539-285562](../../../../../reference/runtime/sand-eval-runner.cjs#L285539-L285562) | `FunctionDeclaration` | no | `stats` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:616999-617022](../../../../../reference/runtime/host-main.cjs#L616999-L617022) | 4 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:285539-285562](../../../../../reference/runtime/sand-eval-runner.cjs#L285539-L285562) | 4 | 0 | 0 | 1 | 0 | 0 |

### host:616999

Calls written directly in this body: `.join`, `files.join`, `files.slice`, `stats.lastAssistantExcerpt.replaceAll`, `stats.roleCounts.map`, `stats.toolCounts.map`, `truncateChars`, `withThousands`.

Assignment or increment targets: `out`.

SHA-256 of the source span: `ce5c26401ba03e7a073d545b6446becd482f7fef135366d03c15f6c35e5565b9`.

### evaluation:285539

Calls written directly in this body: `.join`, `files.join`, `files.slice`, `stats.lastAssistantExcerpt.replaceAll`, `stats.roleCounts.map`, `stats.toolCounts.map`, `truncateChars`, `withThousands`.

Assignment or increment targets: `out`.

SHA-256 of the source span: `ce5c26401ba03e7a073d545b6446becd482f7fef135366d03c15f6c35e5565b9`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
