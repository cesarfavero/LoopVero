# `ProfileWatch.watchSessionProfile`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/transcripts/README.en.md).

**Module:** `host/extensions/transcript/profile-watch.ts` · [Module README](../../../../../../modules/host/extensions/transcript/profile-watch-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:738829-738843](../../../../../../../reference/runtime/host-main.cjs#L738829-L738843) | `method` | no | `session` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:738829-738843](../../../../../../../reference/runtime/host-main.cjs#L738829-L738843) | 1 | 0 | 0 | 1 | 0 | 1 |

### host:738829

Calls written directly in this body: `this.seedKnownAgentName`, `this.stopWatchingProfile`.

Assignment or increment targets: `this.profileWatcher`, `this.watchedProfileAgentId`.

SHA-256 of the source span: `5fc4dbc317e6a5da928951db6b177c6439945f8512377534d9cf2174579f0460`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
