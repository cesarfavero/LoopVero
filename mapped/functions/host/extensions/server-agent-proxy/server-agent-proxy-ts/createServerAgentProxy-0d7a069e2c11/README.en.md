# `createServerAgentProxy`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/server-agent-proxy/server-agent-proxy.ts` · [Module README](../../../../../../modules/host/extensions/server-agent-proxy/server-agent-proxy-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:714578-714965](../../../../../../../reference/runtime/host-main.cjs#L714578-L714965) | `FunctionDeclaration` | no | `deps` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:714578-714965](../../../../../../../reference/runtime/host-main.cjs#L714578-L714965) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:714578

Calls written directly in this body: `createSameIdRoomCreateRetryPolicy`, `createSandCursorBackendClient`, `createServerAgentActionCore`, `createServerAgentActivity`, `createServerTranscriptClient`, `createServerTranscriptIndexer`, `createServerTranscriptTail`, `new Map`, `new RPCVoiceCallHarness`, `new Set`.

SHA-256 of the source span: `9f755306a4ebb015b2fee265c7e3aef50adfb7435223a497175cb020049567d9`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
