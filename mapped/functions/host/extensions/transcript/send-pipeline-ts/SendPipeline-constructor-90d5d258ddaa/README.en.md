# `SendPipeline.constructor`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/transcripts/README.en.md).

**Module:** `host/extensions/transcript/send-pipeline.ts` · [Module README](../../../../../../modules/host/extensions/transcript/send-pipeline-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:740160-740163](../../../../../../../reference/runtime/host-main.cjs#L740160-L740163) | `method` | no | `tm` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:740160-740163](../../../../../../../reference/runtime/host-main.cjs#L740160-L740163) | 0 | 0 | 0 | 0 | 0 | 0 |

### host:740160

Calls written directly in this body: `new BoxRequestEntries`.

Assignment or increment targets: `this.boxRequests`, `this.tm`.

SHA-256 of the source span: `7cd9d4c4c94155a9369e2349315863b9332abf945d8b3af277f894387f2209e0`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
