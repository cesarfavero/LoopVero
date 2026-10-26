# `createTeachRecordingService/learningPromptRichText`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/teach-recording/teach-recording-service.ts` · [Module README](../../../../../../modules/host/extensions/teach-recording/teach-recording-service-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:728980-728997](../../../../../../../reference/runtime/host-main.cjs#L728980-L728997) | `ArrowFunctionExpression` | no | `agentId` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:728980-728997](../../../../../../../reference/runtime/host-main.cjs#L728980-L728997) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at host:728980 uses an implicit arrow-function return.

### host:728980

Calls written directly in this body: `JSON.stringify`, `learnFromDemonstrationLabelForPersistence`, `queueScope`.

SHA-256 of the source span: `9237ddd413753c746951298b06c02a76db7c5a7af8c04e7795dc265156315962`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
