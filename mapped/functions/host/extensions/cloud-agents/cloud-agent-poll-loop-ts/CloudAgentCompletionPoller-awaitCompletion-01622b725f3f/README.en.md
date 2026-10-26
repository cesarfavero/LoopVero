# `CloudAgentCompletionPoller.awaitCompletion`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/cloud-agents/cloud-agent-poll-loop.ts` · [Module README](../../../../../../modules/host/extensions/cloud-agents/cloud-agent-poll-loop-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:513684-513784](../../../../../../../reference/runtime/host-main.cjs#L513684-L513784) | `method` | yes | `bcId, options2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:513684-513784](../../../../../../../reference/runtime/host-main.cjs#L513684-L513784) | 0 | 0 | 1 | 1 | 0 | 0 |

### host:513684

Calls written directly in this body: `new Promise`, `this.getClient`, `this.options.clock.monotonicNow`.

SHA-256 of the source span: `ce7a1077b5f18f7a46f951abfd4893f0a356939e22e993b22daeac53efd43dff`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
