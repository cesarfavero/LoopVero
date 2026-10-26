# `createTeachRecordingService/recoverFailedStart`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/teach-recording/teach-recording-service.ts` · [Module README](../../../../../../modules/host/extensions/teach-recording/teach-recording-service-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:729049-729055](../../../../../../../reference/runtime/host-main.cjs#L729049-L729055) | `ArrowFunctionExpression` | yes | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:729049-729055](../../../../../../../reference/runtime/host-main.cjs#L729049-L729055) | 2 | 0 | 2 | 1 | 0 | 0 |

### host:729049

Calls written directly in this body: `cleanupFailedStart`, `deps.box.ensureReady`.

Assignment or increment targets: `failedStart`.

SHA-256 of the source span: `73d4ac4905342aa4fb2f76d48c7bad895dce8cd88f6800017f371ecc90fbd60c`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
