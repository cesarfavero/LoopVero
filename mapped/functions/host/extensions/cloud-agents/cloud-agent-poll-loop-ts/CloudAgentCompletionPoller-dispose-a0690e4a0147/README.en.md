# `CloudAgentCompletionPoller.dispose`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/cloud-agents/cloud-agent-poll-loop.ts` · [Module README](../../../../../../modules/host/extensions/cloud-agents/cloud-agent-poll-loop-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:513678-513683](../../../../../../../reference/runtime/host-main.cjs#L513678-L513683) | `method` | no | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:513678-513683](../../../../../../../reference/runtime/host-main.cjs#L513678-L513683) | 0 | 1 | 0 | 0 | 0 | 0 |

### host:513678

Calls written directly in this body: `poll.dispose`, `this.activeCompletionPolls.clear`.

SHA-256 of the source span: `fe7c794044a9e64f6431c554be62d3a2365a8a6dadc34a1890be6d0fb3e3cd51`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
