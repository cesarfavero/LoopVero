# `createTurnAgentComposition/buildAgentForRun/fallback`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/turn-agent-composition.ts` · [Module README](../../../../../modules/core/runner/turn-agent-composition-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:588153-588157](../../../../../../reference/runtime/sand-eval-runner.cjs#L588153-L588157) | `ArrowFunctionExpression` | no | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:588153-588157](../../../../../../reference/runtime/sand-eval-runner.cjs#L588153-L588157) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at evaluation:588153 uses an implicit arrow-function return.

### evaluation:588153

Calls written directly in this body: `draftToolAvailable`, `heldSendFallback`, `turnToolDecisions.offers`.

SHA-256 of the source span: `efb3c1d02f4b7b89515ff9af7c73e62fc663271f440cca33927f49577074ddd6`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
