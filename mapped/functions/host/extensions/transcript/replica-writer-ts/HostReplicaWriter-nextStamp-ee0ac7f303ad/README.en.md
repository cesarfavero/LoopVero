# `HostReplicaWriter.nextStamp`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/transcripts/README.en.md).

**Module:** `host/extensions/transcript/replica-writer.ts` · [Module README](../../../../../../modules/host/extensions/transcript/replica-writer-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:738907-738911](../../../../../../../reference/runtime/host-main.cjs#L738907-L738911) | `method` | no | `replicaKey` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:738907-738911](../../../../../../../reference/runtime/host-main.cjs#L738907-L738911) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:738907

Calls written directly in this body: `this.sequences.get`, `this.sequences.set`.

SHA-256 of the source span: `cdd7908e02796f859b3b795603f73872af90c710f69d3e4706d02509335f8ff8`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
