# `createServerTranscriptTail/runOnce`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/transcripts/README.en.md).

**Module:** `shared/node/server-transcript/server-transcript-tail.ts` · [Module README](../../../../../../modules/shared/node/server-transcript/server-transcript-tail-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:713830-713902](../../../../../../../reference/runtime/host-main.cjs#L713830-L713902) | `ArrowFunctionExpression` | yes | `signal, onProvenHealthy` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:713830-713902](../../../../../../../reference/runtime/host-main.cjs#L713830-L713902) | 11 | 2 | 2 | 4 | 2 | 1 |

### host:713830

Calls written directly in this body: `AbortSignal.any`, `activate`, `armStall`, `backendReturn.noteAnswered`, `clock.monotonicNow`, `connectedStreamIds.add`, `cursorsForConnect`, `deps.client.isEnabled`, `deps.client.watch`, `deps.onConnected`, `deps.onDisconnected`, `disarmStall`, `handleFrame`, `hasRequiredAgents`, `new AbortController`, `new ServerTranscriptTailStallError`, `new Set`, `onProvenHealthy`, `opened.deferredReplacement.dispose`, `recheckGateWhileOpen`, `signal.addEventListener`, `signal.removeEventListener`, `stopRecheck`, `updateLegacyEnabled`.

Assignment or increment targets: `connectedAt`, `openStream`.

Explicit throw targets: `ServerTranscriptTailStallError`, `error64`.

SHA-256 of the source span: `72878f14eb71c54502817680b64efc29ac9542a4c8f1100294c8548d68cd1421`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
