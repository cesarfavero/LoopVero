# `UserFormResponses.wakeFormAuthor`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/transcripts/README.en.md).

**Module:** `host/extensions/transcript/user-form-responses.ts` · [Module README](../../../../../../modules/host/extensions/transcript/user-form-responses-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:740697-740710](../../../../../../../reference/runtime/host-main.cjs#L740697-L740710) | `method` | yes | `located, prompt, options2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:740697-740710](../../../../../../../reference/runtime/host-main.cjs#L740697-L740710) | 1 | 0 | 1 | 1 | 0 | 0 |

### host:740697

Calls written directly in this body: `this.tm.runLifecycle.beginSessionRun`, `this.tm.runLifecycle.enqueueExclusiveRun`, `this.tm.sendPipeline.nextTurnEpoch`.

SHA-256 of the source span: `781e23ad8195a49a0a7f1f004acdced3ce1189e6a34ef50f2032ede59d3c1808`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
