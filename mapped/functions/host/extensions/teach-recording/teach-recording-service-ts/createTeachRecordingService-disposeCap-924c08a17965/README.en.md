# `createTeachRecordingService/disposeCap`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/teach-recording/teach-recording-service.ts` · [Module README](../../../../../../modules/host/extensions/teach-recording/teach-recording-service-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:729073-729076](../../../../../../../reference/runtime/host-main.cjs#L729073-L729076) | `ArrowFunctionExpression` | no | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:729073-729076](../../../../../../../reference/runtime/host-main.cjs#L729073-L729076) | 0 | 0 | 0 | 0 | 0 | 0 |

### host:729073

Calls written directly in this body: `capWake.dispose`.

Assignment or increment targets: `capWake`.

SHA-256 of the source span: `47b9b16ed3478f9e01795ddcf093a3a63e27c960ccd9e088046c25e453ed14df`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
