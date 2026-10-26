# `BackgroundWakes.emitTimelineEvent`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/background-wakes/README.en.md).

**Module:** `host/extensions/transcript/background-wakes.ts` · [Module README](../../../../../../modules/host/extensions/transcript/background-wakes-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:734718-734721](../../../../../../../reference/runtime/host-main.cjs#L734718-L734721) | `method` | no | `agentId, event` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:734718-734721](../../../../../../../reference/runtime/host-main.cjs#L734718-L734721) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:734718

Calls written directly in this body: `this.recordTimelineEvent`, `this.tm.sessions.isAgentGone`.

SHA-256 of the source span: `64d5f2512c1e55c4eca03236da2b3c8a14d89ae883dd6676fc46b499868620a4`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
