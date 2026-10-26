# `renderCurrentSessionPrompt`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/prompts/README.en.md).

**Module:** `core/runner/session-context-prompt.ts` · [Module README](../../../../../modules/core/runner/session-context-prompt-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:538392-538413](../../../../../../reference/runtime/sand-eval-runner.cjs#L538392-L538413) | `FunctionDeclaration` | no | `session, gates = {}` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:538392-538413](../../../../../../reference/runtime/sand-eval-runner.cjs#L538392-L538413) | 11 | 0 | 0 | 3 | 0 | 0 |

### evaluation:538392

Calls written directly in this body: `.join`, `audienceLine`, `isGrokBotSlackSessionKind`, `isGrokBotTeamsSessionKind`, `whereLine`.

SHA-256 of the source span: `93305246289bf7b2c379de5e1ba5a009ba6de05a4d14203305e8b2ebdaf83b25`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
