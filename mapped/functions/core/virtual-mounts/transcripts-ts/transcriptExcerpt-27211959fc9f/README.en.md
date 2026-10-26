# `transcriptExcerpt`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/transcripts/README.en.md).

**Module:** `core/virtual-mounts/transcripts.ts` · [Module README](../../../../../modules/core/virtual-mounts/transcripts-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:766112-766123](../../../../../../reference/runtime/host-main.cjs#L766112-L766123) | `FunctionDeclaration` | no | `text3, query2` |
| [evaluation:559476-559487](../../../../../../reference/runtime/sand-eval-runner.cjs#L559476-L559487) | `FunctionDeclaration` | no | `text3, query2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:766112-766123](../../../../../../reference/runtime/host-main.cjs#L766112-L766123) | 3 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:559476-559487](../../../../../../reference/runtime/sand-eval-runner.cjs#L559476-L559487) | 3 | 0 | 0 | 2 | 0 | 0 |

### host:766112

Calls written directly in this body: `.filter`, `.find`, `.toLowerCase`, `.trim`, `Math.floor`, `Math.max`, `Math.min`, `flat.slice`, `flat.toLowerCase`, `needles.map`, `query2.trim`, `relevanceTokens`, `text3.replace`.

SHA-256 of the source span: `ea543238c6510233cc931f4b5d3b909813b59bfac46bbb971471ad5d9d6b802e`.

### evaluation:559476

Calls written directly in this body: `.filter`, `.find`, `.toLowerCase`, `.trim`, `Math.floor`, `Math.max`, `Math.min`, `flat.slice`, `flat.toLowerCase`, `needles.map`, `query2.trim`, `relevanceTokens`, `text3.replace`.

SHA-256 of the source span: `ea543238c6510233cc931f4b5d3b909813b59bfac46bbb971471ad5d9d6b802e`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
