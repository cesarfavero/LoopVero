# `createTeachRecordingService/startRecording`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/teach-recording/teach-recording-service.ts` · [Module README](../../../../../../modules/host/extensions/teach-recording/teach-recording-service-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:729247-729310](../../../../../../../reference/runtime/host-main.cjs#L729247-L729310) | `ArrowFunctionExpression` | yes | `{     agentId,     entryPoint   }` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:729247-729310](../../../../../../../reference/runtime/host-main.cjs#L729247-L729310) | 5 | 0 | 4 | 1 | 4 | 2 |

### host:729247

Calls written directly in this body: `.join`, `.replace`, `.toISOString`, `Date.now`, `Math.round`, `String`, `armCap`, `cleanupFailedStart`, `crypto.randomUUID`, `deps.box.ensureReady`, `deps.box.getAgentWindowIndex`, `deps.trackRecordingStarted`, `emit`, `ffmpegCmdlineOwnsVideo`, `isForkWindowIndex`, `new Date`, `new SandBoxNoMonitorAvailableError`, `new SandTeachRecordingError`, `recoverFailedStart`, `resolveCaptureInput`, `runShell`, `sessionJson`, `statusOf2`.

Assignment or increment targets: `active`, `failedStart`, `queuePersisted`.

Explicit throw targets: `SandBoxNoMonitorAvailableError`, `SandTeachRecordingError`, `error64`.

SHA-256 of the source span: `8e4ff9e647149163df0d2ea3d9ebbb833cc27bb18d9396394d264c2f0cf6d559`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
