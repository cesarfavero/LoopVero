# `SendPipeline.refuseBoxTurn`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/transcripts/README.en.md).

**Module:** `host/extensions/transcript/send-pipeline.ts` · [Module README](../../../../../../modules/host/extensions/transcript/send-pipeline-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:740189-740192](../../../../../../../reference/runtime/host-main.cjs#L740189-L740192) | `method` | no | `conversationId` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:740189-740192](../../../../../../../reference/runtime/host-main.cjs#L740189-L740192) | 0 | 0 | 0 | 0 | 1 | 0 |

### host:740189

Calls written directly in this body: `new SandBoxHarnessRetiredError`, `this.tm.boxHarnessRefusals.reportBlocked`.

Explicit throw targets: `SandBoxHarnessRetiredError`.

SHA-256 of the source span: `b080d47e57832399de61765a6d2b4d67bb17176cc15b09c423e56a0d8005c287`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
