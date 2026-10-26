# `createServerTranscriptTail/stateFor`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/transcripts/README.en.md).

**Module:** `shared/node/server-transcript/server-transcript-tail.ts` · [Module README](../../../../../../modules/shared/node/server-transcript/server-transcript-tail-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:713038-713063](../../../../../../../reference/runtime/host-main.cjs#L713038-L713063) | `ArrowFunctionExpression` | no | `agentId, sessionId = DEFAULT_GROK_BOT_SESSION_ID` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:713038-713063](../../../../../../../reference/runtime/host-main.cjs#L713038-L713063) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:713038

Calls written directly in this body: `BigInt`, `agents.get`, `agents.set`, `clock.monotonicNow`, `new Map`, `normalizeGrokBotSessionId`, `tailStateKey`.

Assignment or increment targets: `state`, `state.lastTouchedAt`.

SHA-256 of the source span: `4b3d1938d07187712a90af718d895d61e8ea7da1eb7434f5d0e40b499dcfcb26`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
