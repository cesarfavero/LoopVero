# `RunLifecycle.recordTurnCompleted`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/transcripts/README.en.md).

**Module:** `host/extensions/transcript/run-lifecycle.ts` · [Module README](../../../../../../modules/host/extensions/transcript/run-lifecycle-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:740004-740016](../../../../../../../reference/runtime/host-main.cjs#L740004-L740016) | `method` | no | `session` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:740004-740016](../../../../../../../reference/runtime/host-main.cjs#L740004-L740016) | 1 | 0 | 0 | 0 | 0 | 0 |

### host:740004

Calls written directly in this body: `Date.now`, `brandedId`, `classifySandTurnInitiator`, `this.activeRequestSources.get`, `this.runWindowStartedAt.delete`, `this.runWindowStartedAt.get`, `this.tm.groupChat.isGroupSession`, `this.tm.productAnalytics.trackEvent`.

SHA-256 of the source span: `2206e0644e323d99aaa611aa0da6cd41c9beffcf53a98dd0952100954ac59d09`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
