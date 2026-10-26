# `ProfileWatch.emitProfileChanged`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/transcripts/README.en.md).

**Module:** `host/extensions/transcript/profile-watch.ts` · [Module README](../../../../../../modules/host/extensions/transcript/profile-watch-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:738777-738783](../../../../../../../reference/runtime/host-main.cjs#L738777-L738783) | `method` | no | `agentId, avatarChanged = false` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:738777-738783](../../../../../../../reference/runtime/host-main.cjs#L738777-L738783) | 0 | 0 | 0 | 0 | 0 | 0 |

### host:738777

Calls written directly in this body: `this.emitter.emit`, `this.recordNameChangeEvent`.

SHA-256 of the source span: `5726fcbd669867e941259d702a51c8b5eed78b3bcb6eda2abb6177f0eb3b9427`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
