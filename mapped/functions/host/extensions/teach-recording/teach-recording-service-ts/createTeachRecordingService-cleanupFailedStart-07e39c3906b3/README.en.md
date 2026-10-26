# `createTeachRecordingService/cleanupFailedStart`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/teach-recording/teach-recording-service.ts` · [Module README](../../../../../../modules/host/extensions/teach-recording/teach-recording-service-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:729030-729048](../../../../../../../reference/runtime/host-main.cjs#L729030-L729048) | `ArrowFunctionExpression` | yes | `{     connection,     recording   }` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:729030-729048](../../../../../../../reference/runtime/host-main.cjs#L729030-L729048) | 1 | 0 | 1 | 0 | 1 | 0 |

### host:729030

Calls written directly in this body: `discardRecording`, `ffmpegCmdlineOwnsVideo`, `new SandTeachRecordingError`.

Explicit throw targets: `SandTeachRecordingError`.

SHA-256 of the source span: `25bcb293779097ce51a7333281e730af153182edd20f642c6d717b24b1db3bbc`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
