# `CloudAgentUpdatesStream.ingest`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `shared/node/cursor-backend/cloud-agent-updates-stream.ts` · [Module README](../../../../../../modules/shared/node/cursor-backend/cloud-agent-updates-stream-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:537701-537728](../../../../../../../reference/runtime/host-main.cjs#L537701-L537728) | `method` | no | `response` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:537701-537728](../../../../../../../reference/runtime/host-main.cjs#L537701-L537728) | 8 | 1 | 0 | 4 | 0 | 0 |

### host:537701

Calls written directly in this body: `snapshotToCloudAgentUpdateEvent`, `this.noteLive`, `this.options.onEvent`, `this.options.onLive`, `toCloudAgentUpdateEvent`.

Assignment or increment targets: `this.cursor`.

SHA-256 of the source span: `730477efbcd7d2be68680b250f6850cc5c08247dab853ed51574447c201456f8`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
