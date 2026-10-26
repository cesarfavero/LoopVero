# `_MicrosoftTeamsSite.linksOtherSite`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `shared/meetings/meeting-site.ts` · [Module README](../../../../../modules/shared/meetings/meeting-site-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:772392-772398](../../../../../../reference/runtime/host-main.cjs#L772392-L772398) | `method` | no | `text3` |
| [evaluation:571621-571627](../../../../../../reference/runtime/sand-eval-runner.cjs#L571621-L571627) | `method` | no | `text3` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:772392-772398](../../../../../../reference/runtime/host-main.cjs#L772392-L772398) | 2 | 1 | 0 | 2 | 0 | 0 |
| [evaluation:571621-571627](../../../../../../reference/runtime/sand-eval-runner.cjs#L571621-L571627) | 2 | 1 | 0 | 2 | 0 | 0 |

### host:772392

Calls written directly in this body: `MeetingHosts.siteOf`, `MeetingSites.linksIn`, `URL.canParse`, `new URL`.

SHA-256 of the source span: `b524d9d82597989cbd372d6271a8bc8cc42dbf6a94d9fa2b5ffb779107307827`.

### evaluation:571621

Calls written directly in this body: `MeetingHosts.siteOf`, `MeetingSites.linksIn`, `URL.canParse`, `new URL`.

SHA-256 of the source span: `b524d9d82597989cbd372d6271a8bc8cc42dbf6a94d9fa2b5ffb779107307827`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
