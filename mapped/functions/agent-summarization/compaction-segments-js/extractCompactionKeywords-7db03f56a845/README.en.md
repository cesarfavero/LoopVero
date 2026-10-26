# `extractCompactionKeywords`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/components/context-compaction/README.en.md).

**Module:** `agent-summarization/compaction-segments.js` · [Module README](../../../../modules/agent-summarization/compaction-segments-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:617174-617195](../../../../../reference/runtime/host-main.cjs#L617174-L617195) | `FunctionDeclaration` | no | `summary` |
| [evaluation:285714-285735](../../../../../reference/runtime/sand-eval-runner.cjs#L285714-L285735) | `FunctionDeclaration` | no | `summary` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:617174-617195](../../../../../reference/runtime/host-main.cjs#L617174-L617195) | 4 | 1 | 0 | 1 | 0 | 0 |
| [evaluation:285714-285735](../../../../../reference/runtime/sand-eval-runner.cjs#L285714-L285735) | 4 | 1 | 0 | 1 | 0 | 0 |

### host:617174

Calls written directly in this body: `/^#{0,6}\s*8\.\s+Current Work/m.exec`, `KEYWORD_STOPWORDS.has`, `keyword.toLowerCase`, `nextHeader.exec`, `seen.includes`, `seen.push`, `summary.slice`, `text3.matchAll`.

Assignment or increment targets: `nextHeader.lastIndex`, `text3`.

SHA-256 of the source span: `587e14601fb1e60995e39ec48826838f22a050b05acd52973ead09a0b3955d4c`.

### evaluation:285714

Calls written directly in this body: `/^#{0,6}\s*8\.\s+Current Work/m.exec`, `KEYWORD_STOPWORDS.has`, `keyword.toLowerCase`, `nextHeader.exec`, `seen.includes`, `seen.push`, `summary.slice`, `text3.matchAll`.

Assignment or increment targets: `nextHeader.lastIndex`, `text3`.

SHA-256 of the source span: `587e14601fb1e60995e39ec48826838f22a050b05acd52973ead09a0b3955d4c`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
