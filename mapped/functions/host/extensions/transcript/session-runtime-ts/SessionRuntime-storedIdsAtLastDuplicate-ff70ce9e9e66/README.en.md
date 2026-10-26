# `SessionRuntime.storedIdsAtLastDuplicate`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/transcripts/README.en.md).

**Module:** `host/extensions/transcript/session-runtime.ts` · [Module README](../../../../../../modules/host/extensions/transcript/session-runtime-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:737965-737967](../../../../../../../reference/runtime/host-main.cjs#L737965-L737967) | `method` | no | `agentId` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:737965-737967](../../../../../../../reference/runtime/host-main.cjs#L737965-L737967) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:737965

Calls written directly in this body: `this.storedIdsByAgentAtDuplicate.get`.

SHA-256 of the source span: `56c1a34385b2a1209e9e137b775a466f9786d08dbbdb98f1ef7cdb8295fa54b2`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
