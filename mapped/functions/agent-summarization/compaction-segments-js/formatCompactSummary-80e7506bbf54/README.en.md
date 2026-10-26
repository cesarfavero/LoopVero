# `formatCompactSummary`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/components/context-compaction/README.en.md).

**Module:** `agent-summarization/compaction-segments.js` · [Module README](../../../../modules/agent-summarization/compaction-segments-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:617196-617227](../../../../../reference/runtime/host-main.cjs#L617196-L617227) | `FunctionDeclaration` | no | `summary` |
| [evaluation:285736-285767](../../../../../reference/runtime/sand-eval-runner.cjs#L285736-L285767) | `FunctionDeclaration` | no | `summary` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:617196-617227](../../../../../reference/runtime/host-main.cjs#L617196-L617227) | 5 | 2 | 0 | 1 | 0 | 0 |
| [evaluation:285736-285767](../../../../../reference/runtime/sand-eval-runner.cjs#L285736-L285767) | 5 | 2 | 0 | 1 | 0 | 0 |

### host:617196

Calls written directly in this body: `.trim`, `neutralizeCompactionControlTokens`, `result.includes`, `result.indexOf`, `result.lastIndexOf`, `result.replaceAll`, `result.slice`, `result.trim`, `stripLeadingScratchpad`.

Assignment or increment targets: `result`, `start`.

SHA-256 of the source span: `bce3a1709900fdb0ba82b77006e7ae97795c9bcd2a036e01aec63386b19e7840`.

### evaluation:285736

Calls written directly in this body: `.trim`, `neutralizeCompactionControlTokens`, `result.includes`, `result.indexOf`, `result.lastIndexOf`, `result.replaceAll`, `result.slice`, `result.trim`, `stripLeadingScratchpad`.

Assignment or increment targets: `result`, `start`.

SHA-256 of the source span: `bce3a1709900fdb0ba82b77006e7ae97795c9bcd2a036e01aec63386b19e7840`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
