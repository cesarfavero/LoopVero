# `TranscriptEntryPublisher.sweepAllAgents`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/transcripts/README.en.md).

**Module:** `host/extensions/transcript-publish/transcript-entry-publisher.ts` · [Module README](../../../../../../modules/host/extensions/transcript-publish/transcript-entry-publisher-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:783942-783977](../../../../../../../reference/runtime/host-main.cjs#L783942-L783977) | `method` | yes | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:783942-783977](../../../../../../../reference/runtime/host-main.cjs#L783942-L783977) | 4 | 1 | 1 | 2 | 0 | 1 |

### host:783942

Calls written directly in this body: `Math.round`, `brandedErrorTag`, `dirent.isDirectory`, `errorLogTag`, `findSystemErrno`, `logFields`, `parseAgentId`, `performance.now`, `this.dirtyFor`, `this.report`.

Assignment or increment targets: `.backfill`, `swept`.

SHA-256 of the source span: `2b219f761e9b36f42cc97822696605d97af680b6e18c48afcd490ec4f9a213d4`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
