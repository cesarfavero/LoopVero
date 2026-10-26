# `createTeachRecordingService/signQueueEntry`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/teach-recording/teach-recording-service.ts` · [Module README](../../../../../../modules/host/extensions/teach-recording/teach-recording-service-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:728970-728975](../../../../../../../reference/runtime/host-main.cjs#L728970-L728975) | `ArrowFunctionExpression` | no | `{     key,     agentId,     queuedFile   }` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:728970-728975](../../../../../../../reference/runtime/host-main.cjs#L728970-L728975) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at host:728970 uses an implicit arrow-function return.

### host:728970

Calls written directly in this body: `.digest`, `.update`.

SHA-256 of the source span: `1d7d109169674fa5da7d24b07093240df2d2942107a78e94d0725f548bf89164`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
