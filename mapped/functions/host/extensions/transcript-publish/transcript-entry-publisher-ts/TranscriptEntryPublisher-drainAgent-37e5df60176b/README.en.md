# `TranscriptEntryPublisher.drainAgent`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/transcripts/README.en.md).

**Module:** `host/extensions/transcript-publish/transcript-entry-publisher.ts` · [Module README](../../../../../../modules/host/extensions/transcript-publish/transcript-entry-publisher-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:784038-784043](../../../../../../../reference/runtime/host-main.cjs#L784038-L784043) | `method` | yes | `agentId` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:784038-784043](../../../../../../../reference/runtime/host-main.cjs#L784038-L784043) | 1 | 0 | 1 | 1 | 0 | 0 |

### host:784038

Calls written directly in this body: `this.dirty.delete`, `this.dirty.get`, `this.publishAgent`.

SHA-256 of the source span: `c952a65f3ac21adc5ea85e50e34bb13cfc346aeda807cc8c34e8613dfc563379`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
