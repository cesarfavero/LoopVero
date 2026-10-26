# `createTeachRecordingService/queueFile`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/teach-recording/teach-recording-service.ts` · [Module README](../../../../../../modules/host/extensions/teach-recording/teach-recording-service-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:728977-728977](../../../../../../../reference/runtime/host-main.cjs#L728977-L728977) | `ArrowFunctionExpression` | no | `recording` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:728977-728977](../../../../../../../reference/runtime/host-main.cjs#L728977-L728977) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at host:728977 uses an implicit arrow-function return.

### host:728977

Calls written directly in this body: `queueFileForSessionDir`.

SHA-256 of the source span: `5f1240f166cc5baeef0ae8d10f459b90b54ed72352b8a8be1bc026a258f8d492`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
