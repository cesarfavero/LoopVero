# `createTeachRecordingService/runShell`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/teach-recording/teach-recording-service.ts` · [Module README](../../../../../../modules/host/extensions/teach-recording/teach-recording-service-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:728911-728929](../../../../../../../reference/runtime/host-main.cjs#L728911-L728929) | `ArrowFunctionExpression` | yes | `connection, command, toolCallId` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:728911-728929](../../../../../../../reference/runtime/host-main.cjs#L728911-L728929) | 1 | 0 | 1 | 1 | 1 | 0 |

### host:728911

Calls written directly in this body: `buildHostShellArgs`, `connection.remoteAccessor.get`, `new SandTeachRecordingError`, `shell.execute`.

Explicit throw targets: `SandTeachRecordingError`.

SHA-256 of the source span: `7fac1d5f2c7c3390f156c00eec47fb59579a3607afac2304e3389b0ae75f58e7`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
