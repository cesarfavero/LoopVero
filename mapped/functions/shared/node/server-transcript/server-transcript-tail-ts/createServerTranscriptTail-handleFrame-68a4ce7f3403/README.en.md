# `createServerTranscriptTail/handleFrame`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/transcripts/README.en.md).

**Module:** `shared/node/server-transcript/server-transcript-tail.ts` · [Module README](../../../../../../modules/shared/node/server-transcript/server-transcript-tail-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:713644-713728](../../../../../../../reference/runtime/host-main.cjs#L713644-L713728) | `ArrowFunctionExpression` | yes | `frame, signal` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:713644-713728](../../../../../../../reference/runtime/host-main.cjs#L713644-L713728) | 19 | 0 | 3 | 16 | 0 | 0 |

### host:713644

Calls written directly in this body: `acceptsAgent`, `acceptsRawAgent`, `actions2.actions.filter`, `deps.onAgentState`, `deps.onAgentStateChanged`, `deps.onBoxState`, `deps.onComputerActions`, `deps.onPageTitleChanged`, `deps.onRosterChanged`, `deps.onTurnFailed`, `frame.frame.value.clone`, `handleRows`, `normalizeGrokBotSessionId`, `parseAgentId`, `readGenerationFor`, `state.client.filter`, `state.live.filter`, `tailStateKey`, `withAgent`.

Assignment or increment targets: `actions2.actions`, `state.client`, `state.live`.

SHA-256 of the source span: `2a737559ba067643cab42c68e9a5bed6be8ac07bdcb0a170f7468e36de4ab832`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
