# `RunLifecycle.withRunStates`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/transcripts/README.en.md).

**Module:** `host/extensions/transcript/run-lifecycle.ts` · [Module README](../../../../../../modules/host/extensions/transcript/run-lifecycle-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:740053-740076](../../../../../../../reference/runtime/host-main.cjs#L740053-L740076) | `method` | no | `agents` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:740053-740076](../../../../../../../reference/runtime/host-main.cjs#L740053-L740076) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:740053

Calls written directly in this body: `agents.map`, `this.runningAgentIds`.

SHA-256 of the source span: `dfb12d2dc9b59f41b18c52766cd2163bb137add736196a8d4da15dafbe6572c2`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
