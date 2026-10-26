# `isGroupTurnPromptText`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/prompts/README.en.md).

**Module:** `core/runner/sand-prompt-markers.ts` · [Module README](../../../../../modules/core/runner/sand-prompt-markers-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:491176-491178](../../../../../../reference/runtime/host-main.cjs#L491176-L491178) | `FunctionDeclaration` | no | `text3` |
| [evaluation:526095-526097](../../../../../../reference/runtime/sand-eval-runner.cjs#L526095-L526097) | `FunctionDeclaration` | no | `text3` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:491176-491178](../../../../../../reference/runtime/host-main.cjs#L491176-L491178) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:526095-526097](../../../../../../reference/runtime/sand-eval-runner.cjs#L526095-L526097) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:491176

Calls written directly in this body: `.startsWith`, `stripLeadingHiddenPromptMarker`.

SHA-256 of the source span: `53bdf3cb7757469ddd2fa3a1a7dcf699bf3831568ddc1447d9b2c3daf8145746`.

### evaluation:526095

Calls written directly in this body: `.startsWith`, `stripLeadingHiddenPromptMarker`.

SHA-256 of the source span: `53bdf3cb7757469ddd2fa3a1a7dcf699bf3831568ddc1447d9b2c3daf8145746`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
