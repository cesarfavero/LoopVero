# `BackgroundWakes.sendToAgent`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/background-wakes/README.en.md).

**Module:** `host/extensions/transcript/background-wakes.ts` · [Module README](../../../../../../modules/host/extensions/transcript/background-wakes-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:734703-734705](../../../../../../../reference/runtime/host-main.cjs#L734703-L734705) | `method` | no | `...args` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:734703-734705](../../../../../../../reference/runtime/host-main.cjs#L734703-L734705) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:734703

Calls written directly in this body: `this.agentToAgent.sendToAgent`.

SHA-256 of the source span: `bb4926768991c2dc6537ea1d200c8248e17d7762d3925062b91ed7a4b448c2d6`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
