# `RosterProjection.emit`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/transcripts/README.en.md).

**Module:** `host/extensions/transcript/roster-projection.ts` · [Module README](../../../../../../modules/host/extensions/transcript/roster-projection-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:739364-739366](../../../../../../../reference/runtime/host-main.cjs#L739364-L739366) | `method` | no | `event, owningAgentId` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:739364-739366](../../../../../../../reference/runtime/host-main.cjs#L739364-L739366) | 0 | 0 | 0 | 0 | 0 | 0 |

### host:739364

Calls written directly in this body: `this.emitter.emit`, `this.withOrderedStamp`, `this.withOwningAgentId`.

SHA-256 of the source span: `104157544e4074e4de0c50a9e468647e5c20e3e4e777d4dc1d7c9d96e6a5f024`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
