# `TranscriptEntryPublisher.constructor/this.report`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/transcripts/README.en.md).

**Module:** `host/extensions/transcript-publish/transcript-entry-publisher.ts` · [Module README](../../../../../../modules/host/extensions/transcript-publish/transcript-entry-publisher-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:783872-783878](../../../../../../../reference/runtime/host-main.cjs#L783872-L783878) | `ArrowFunctionExpression` | no | `level, metadata2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:783872-783878](../../../../../../../reference/runtime/host-main.cjs#L783872-L783878) | 0 | 0 | 0 | 0 | 0 | 1 |

### host:783872

Calls written directly in this body: `deps.report`.

Assignment or increment targets: `this.droppedReports`.

SHA-256 of the source span: `ca95a531b82ec820bae1e181525692e9dc929ca81ec66b355f968f0e1c7a449c`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
