# `createTeachRecordingService/parseQueueScan`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/teach-recording/teach-recording-service.ts` · [Module README](../../../../../../modules/host/extensions/teach-recording/teach-recording-service-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:729131-729152](../../../../../../../reference/runtime/host-main.cjs#L729131-L729152) | `ArrowFunctionExpression` | no | `{     stdout,     key,     agentsByScope   }` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:729131-729152](../../../../../../../reference/runtime/host-main.cjs#L729131-L729152) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at host:729131 uses an implicit arrow-function return.

### host:729131

Calls written directly in this body: `.flatMap`, `stdout.split`.

SHA-256 of the source span: `07ed3b590ceb315fffa7f978396b3ba90a13ad65935218c9c6420a6ecd501e85`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
