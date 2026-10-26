# `botBlockTextProbeCandidates`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/bot-block-detection.ts` · [Module README](../../../../../modules/core/runner/bot-block-detection-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:484448-484463](../../../../../../reference/runtime/sand-eval-runner.cjs#L484448-L484463) | `FunctionDeclaration` | no | `page` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:484448-484463](../../../../../../reference/runtime/sand-eval-runner.cjs#L484448-L484463) | 5 | 1 | 0 | 3 | 0 | 0 |

### evaluation:484448

Calls written directly in this body: `BOT_BLOCK_SIGNATURES.entries`, `candidates.push`, `matchesSignature`, `needsPageProbe`, `pageFactsOf`.

SHA-256 of the source span: `7150346dbbb0aecab5d62c030be55248bf8b804d05997e9d9470e4efbb05185f`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
