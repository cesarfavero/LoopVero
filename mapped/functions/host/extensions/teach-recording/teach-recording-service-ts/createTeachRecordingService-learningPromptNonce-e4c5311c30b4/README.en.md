# `createTeachRecordingService/learningPromptNonce`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/teach-recording/teach-recording-service.ts` · [Module README](../../../../../../modules/host/extensions/teach-recording/teach-recording-service-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:728978-728978](../../../../../../../reference/runtime/host-main.cjs#L728978-L728978) | `ArrowFunctionExpression` | no | `recording` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:728978-728978](../../../../../../../reference/runtime/host-main.cjs#L728978-L728978) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at host:728978 uses an implicit arrow-function return.

### host:728978

Calls written directly in this body: `clientNonceForQueue`, `queueFile`.

SHA-256 of the source span: `ffa15a1e645ca9b8a536ac4a428eb853cea6327fee7030eb4fa15986305bf18a`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
