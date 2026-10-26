# `ProfileWatch.stopWatchingProfile`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/transcripts/README.en.md).

**Module:** `host/extensions/transcript/profile-watch.ts` · [Module README](../../../../../../modules/host/extensions/transcript/profile-watch-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:738870-738877](../../../../../../../reference/runtime/host-main.cjs#L738870-L738877) | `method` | no | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:738870-738877](../../../../../../../reference/runtime/host-main.cjs#L738870-L738877) | 0 | 0 | 0 | 0 | 0 | 0 |

### host:738870

Calls written directly in this body: `this.profileWatchTimer.dispose`, `this.profileWatcher.close`.

Assignment or increment targets: `this.pendingAvatarChange`, `this.profileWatchTimer`, `this.profileWatcher`, `this.watchedProfileAgentId`.

SHA-256 of the source span: `78fc955e127a11aef1e4d4bd3b71aa9d6a807b15291acc8ac1532e6e7c46922b`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
