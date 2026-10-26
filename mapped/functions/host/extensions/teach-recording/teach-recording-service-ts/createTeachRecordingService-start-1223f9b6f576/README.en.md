# `createTeachRecordingService/start`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/teach-recording/teach-recording-service.ts` · [Module README](../../../../../../modules/host/extensions/teach-recording/teach-recording-service-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:729319-729340](../../../../../../../reference/runtime/host-main.cjs#L729319-L729340) | `ArrowFunctionExpression` | yes | `args` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:729319-729340](../../../../../../../reference/runtime/host-main.cjs#L729319-L729340) | 4 | 0 | 2 | 3 | 2 | 1 |

### host:729319

Calls written directly in this body: `new SandTeachRecordingError`, `reportStartFailure`, `startRecording`, `statusOf2`.

Assignment or increment targets: `startInFlight`.

Explicit throw targets: `error64`.

SHA-256 of the source span: `be4431c782ac6aab3dfd16605d80fc8d49dc48e3308e8240c3f4ca5ce0a6618b`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
