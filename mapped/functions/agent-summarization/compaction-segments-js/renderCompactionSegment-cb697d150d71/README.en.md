# `renderCompactionSegment`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/components/context-compaction/README.en.md).

**Module:** `agent-summarization/compaction-segments.js` · [Module README](../../../../modules/agent-summarization/compaction-segments-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:617088-617134](../../../../../reference/runtime/host-main.cjs#L617088-L617134) | `FunctionDeclaration` | no | `args` |
| [evaluation:285628-285674](../../../../../reference/runtime/sand-eval-runner.cjs#L285628-L285674) | `FunctionDeclaration` | no | `args` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:617088-617134](../../../../../reference/runtime/host-main.cjs#L617088-L617134) | 4 | 1 | 0 | 2 | 0 | 0 |
| [evaluation:285628-285674](../../../../../reference/runtime/sand-eval-runner.cjs#L285628-L285674) | 4 | 1 | 0 | 2 | 0 | 0 |

### host:617088

Calls written directly in this body: `.replace`, `Math.max`, `String`, `TRUNCATION_NOTICE.replace`, `args.summary.trim`, `args.turns.entries`, `blocks.join`, `blocks.push`, `computeTurnStats`, `renderStatsBlock`, `section.render`, `segmentLabel`, `utf8ByteLength`.

Assignment or increment targets: `body`, `truncatedAt`, `used`.

SHA-256 of the source span: `91cae64e97a0a1130767ed9258d2bdc22b4fd63aae86af67abf66cc77ea6d24e`.

### evaluation:285628

Calls written directly in this body: `.replace`, `Math.max`, `String`, `TRUNCATION_NOTICE.replace`, `args.summary.trim`, `args.turns.entries`, `blocks.join`, `blocks.push`, `computeTurnStats`, `renderStatsBlock`, `section.render`, `segmentLabel`, `utf8ByteLength`.

Assignment or increment targets: `body`, `truncatedAt`, `used`.

SHA-256 of the source span: `91cae64e97a0a1130767ed9258d2bdc22b4fd63aae86af67abf66cc77ea6d24e`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
