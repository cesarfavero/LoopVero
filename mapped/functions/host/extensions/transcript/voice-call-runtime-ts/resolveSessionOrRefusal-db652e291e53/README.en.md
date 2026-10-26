# `resolveSessionOrRefusal`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/transcripts/README.en.md).

**Module:** `host/extensions/transcript/voice-call-runtime.ts` · [Module README](../../../../../../modules/host/extensions/transcript/voice-call-runtime-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:742412-742422](../../../../../../../reference/runtime/host-main.cjs#L742412-L742422) | `FunctionDeclaration` | yes | `tm, agentId` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:742412-742422](../../../../../../../reference/runtime/host-main.cjs#L742412-L742422) | 2 | 0 | 1 | 3 | 0 | 1 |

### host:742412

Calls written directly in this body: `isAgentAbsent`, `reportFallback`, `tm.sessions.deletedAgentIds.has`, `tm.sessions.leaseBackgroundSession`.

SHA-256 of the source span: `593a69cb5c10e108cdc672945ee905bb16b10978701a1ee9bacb3b0d4ca7d125`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
