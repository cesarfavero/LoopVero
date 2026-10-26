# `cloudAgentRateLimitPauseMs`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/cloud-agents/cloud-agent-poll-loop.ts` · [Module README](../../../../../../modules/host/extensions/cloud-agents/cloud-agent-poll-loop-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:513633-513636](../../../../../../../reference/runtime/host-main.cjs#L513633-L513636) | `FunctionDeclaration` | no | `error64, random = Math.random` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:513633-513636](../../../../../../../reference/runtime/host-main.cjs#L513633-L513636) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:513633

Calls written directly in this body: `Math.round`, `getConnectRetryAfterMs`, `random`.

SHA-256 of the source span: `95f5986e2738ead21d17cfe0452ad470eac776565f13c293487a848cbebc6557`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
