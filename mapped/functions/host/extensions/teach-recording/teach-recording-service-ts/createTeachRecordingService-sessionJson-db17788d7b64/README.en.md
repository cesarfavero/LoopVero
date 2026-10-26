# `createTeachRecordingService/sessionJson`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/teach-recording/teach-recording-service.ts` · [Module README](../../../../../../modules/host/extensions/teach-recording/teach-recording-service-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:728934-728951](../../../../../../../reference/runtime/host-main.cjs#L728934-L728951) | `ArrowFunctionExpression` | no | `{     recording,     end   }` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:728934-728951](../../../../../../../reference/runtime/host-main.cjs#L728934-L728951) | 1 | 0 | 0 | 0 | 0 | 0 |

The occurrence at host:728934 uses an implicit arrow-function return.

### host:728934

Calls written directly in this body: `.replace`, `.toISOString`, `JSON.stringify`, `new Date`.

SHA-256 of the source span: `4a751e96386a8366bb1ae9a02dfd58c23b4e0ece9d550b9b776d17ee94a03dcf`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
