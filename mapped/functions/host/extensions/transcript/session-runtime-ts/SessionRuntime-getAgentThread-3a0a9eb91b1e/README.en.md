# `SessionRuntime.getAgentThread`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/transcripts/README.en.md).

**Module:** `host/extensions/transcript/session-runtime.ts` · [Module README](../../../../../../modules/host/extensions/transcript/session-runtime-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:738180-738182](../../../../../../../reference/runtime/host-main.cjs#L738180-L738182) | `method` | no | `agentId, rootId` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:738180-738182](../../../../../../../reference/runtime/host-main.cjs#L738180-L738182) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:738180

Calls written directly in this body: `.db.getThread`, `this.resolveLiveSession`, `this.tm.sessionStore.readAgentThread`.

SHA-256 of the source span: `cb2225c6ff2ed4b4c118cc03e069d4c1e6dfaf667379cd4634aaa25a6c128a71`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
