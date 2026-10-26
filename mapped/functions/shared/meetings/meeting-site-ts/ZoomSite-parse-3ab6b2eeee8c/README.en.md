# `_ZoomSite.parse`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `shared/meetings/meeting-site.ts` · [Module README](../../../../../modules/shared/meetings/meeting-site-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:772287-772297](../../../../../../reference/runtime/host-main.cjs#L772287-L772297) | `method` | no | `raw` |
| [evaluation:571516-571526](../../../../../../reference/runtime/sand-eval-runner.cjs#L571516-L571526) | `method` | no | `raw` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:772287-772297](../../../../../../reference/runtime/host-main.cjs#L772287-L772297) | 3 | 0 | 0 | 3 | 0 | 0 |
| [evaluation:571516-571526](../../../../../../reference/runtime/sand-eval-runner.cjs#L571516-L571526) | 3 | 0 | 0 | 3 | 0 | 0 |

### host:772287

Calls written directly in this body: `.filter`, `MeetingHosts.siteOf`, `MeetingSite.httpsUrl`, `_ZoomSite.meetingId`, `_ZoomSite.password`, `encodeURIComponent`, `parsed2.pathname.split`, `raw.trim`.

SHA-256 of the source span: `0c650c7b2b3b35713aad30bad5ed8cd459dd23fedc3569384bf1d8aa6df6c863`.

### evaluation:571516

Calls written directly in this body: `.filter`, `MeetingHosts.siteOf`, `MeetingSite.httpsUrl`, `_ZoomSite.meetingId`, `_ZoomSite.password`, `encodeURIComponent`, `parsed.pathname.split`, `raw.trim`.

SHA-256 of the source span: `a9f9233dc2463fb83abfa35f24d39b31794f03184b3eb96667276ff84250b8c0`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
