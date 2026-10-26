# `matchLaunch`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/transcripts/README.en.md).

**Module:** `core/evals/turn-transcript.ts` · [Module README](../../../../../modules/core/evals/turn-transcript-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:628551-628559](../../../../../../reference/runtime/sand-eval-runner.cjs#L628551-L628559) | `FunctionDeclaration` | no | `launches, messages, claimed` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:628551-628559](../../../../../../reference/runtime/sand-eval-runner.cjs#L628551-L628559) | 1 | 0 | 0 | 2 | 0 | 0 |

### evaluation:628551

Calls written directly in this body: `.join`, `launches.find`, `messages.flatMap`.

SHA-256 of the source span: `3fcd9dbf2605f0655ac7d50f7416552182db92c13425ef506c4e2b07ef5c152a`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
