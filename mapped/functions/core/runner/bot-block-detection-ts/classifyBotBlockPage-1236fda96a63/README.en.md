# `classifyBotBlockPage`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/bot-block-detection.ts` · [Module README](../../../../../modules/core/runner/bot-block-detection-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:484464-484482](../../../../../../reference/runtime/sand-eval-runner.cjs#L484464-L484482) | `FunctionDeclaration` | no | `page` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:484464-484482](../../../../../../reference/runtime/sand-eval-runner.cjs#L484464-L484482) | 4 | 1 | 0 | 4 | 0 | 0 |

### evaluation:484464

Calls written directly in this body: `BOT_BLOCK_SIGNATURES.entries`, `facts.hostname.slice`, `matchesSignature`, `needsPageProbe`, `pageFactsOf`, `siteSectionForUrl`, `telemetrySafePageUrl`.

SHA-256 of the source span: `b136d52e1a06360843dfba0c36e3144b37f5d843a9a63661b5e8dad813d22295`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
