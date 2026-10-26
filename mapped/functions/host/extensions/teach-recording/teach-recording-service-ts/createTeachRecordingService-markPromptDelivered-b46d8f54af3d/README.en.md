# `createTeachRecordingService/markPromptDelivered`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/teach-recording/teach-recording-service.ts` · [Module README](../../../../../../modules/host/extensions/teach-recording/teach-recording-service-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:729077-729096](../../../../../../../reference/runtime/host-main.cjs#L729077-L729096) | `ArrowFunctionExpression` | yes | `{     connection,     pending   }` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:729077-729096](../../../../../../../reference/runtime/host-main.cjs#L729077-L729096) | 1 | 0 | 1 | 0 | 1 | 0 |

### host:729077

Calls written directly in this body: `.join`, `new SandTeachRecordingError`, `queueScope`, `runShell`.

Explicit throw targets: `SandTeachRecordingError`.

SHA-256 of the source span: `4379fe3133b128413df9c2a380a86111ab037493b198ce42c9f8bcfb6db9a0cd`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
