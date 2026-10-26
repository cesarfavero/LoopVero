# `computeTurnStats`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/components/context-compaction/README.en.md).

**Module:** `agent-summarization/compaction-segments.js` · [Module README](../../../../modules/agent-summarization/compaction-segments-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:616958-616998](../../../../../reference/runtime/host-main.cjs#L616958-L616998) | `FunctionDeclaration` | no | `turns` |
| [evaluation:285498-285538](../../../../../reference/runtime/sand-eval-runner.cjs#L285498-L285538) | `FunctionDeclaration` | no | `turns` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:616958-616998](../../../../../reference/runtime/host-main.cjs#L616958-L616998) | 4 | 3 | 0 | 1 | 0 | 0 |
| [evaluation:285498-285538](../../../../../reference/runtime/sand-eval-runner.cjs#L285498-L285538) | 4 | 3 | 0 | 1 | 0 | 0 |

### host:616958

Calls written directly in this body: `.sort`, `.trim`, `FILE_ARG_KEYS.find`, `Object.entries`, `argValuePlain`, `lastCodePoints`, `new Map`, `new Set`, `roleCounts.get`, `roleCounts.set`, `toolCounts.get`, `toolCounts.set`, `turn.text.includes`, `turn.text.startsWith`, `uniqueFiles.add`, `utf8ByteLength`.

Assignment or increment targets: `lastAssistant`, `toolErrorCount`, `verboseByteEstimate`.

SHA-256 of the source span: `9502d71df3b10d65a78ec22b6cfb0e64a7564b24108303baa8db4491b7b83c1c`.

### evaluation:285498

Calls written directly in this body: `.sort`, `.trim`, `FILE_ARG_KEYS.find`, `Object.entries`, `argValuePlain`, `lastCodePoints`, `new Map`, `new Set`, `roleCounts.get`, `roleCounts.set`, `toolCounts.get`, `toolCounts.set`, `turn.text.includes`, `turn.text.startsWith`, `uniqueFiles.add`, `utf8ByteLength`.

Assignment or increment targets: `lastAssistant`, `toolErrorCount`, `verboseByteEstimate`.

SHA-256 of the source span: `9502d71df3b10d65a78ec22b6cfb0e64a7564b24108303baa8db4491b7b83c1c`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
