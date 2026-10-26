# `_GoogleMeetSite.parse`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `shared/meetings/meeting-site.ts` · [Module README](../../../../../modules/shared/meetings/meeting-site-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:772259-772266](../../../../../../reference/runtime/host-main.cjs#L772259-L772266) | `method` | no | `raw` |
| [evaluation:571488-571495](../../../../../../reference/runtime/sand-eval-runner.cjs#L571488-L571495) | `method` | no | `raw` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:772259-772266](../../../../../../reference/runtime/host-main.cjs#L772259-L772266) | 3 | 0 | 0 | 3 | 0 | 0 |
| [evaluation:571488-571495](../../../../../../reference/runtime/sand-eval-runner.cjs#L571488-L571495) | 3 | 0 | 0 | 3 | 0 | 0 |

### host:772259

Calls written directly in this body: `MeetingHosts.siteOf`, `MeetingSite.httpsUrl`, `_GoogleMeetSite.codeOfPath`, `_GoogleMeetSite.meetingCode.test`, `_GoogleMeetSite.urlOf`, `raw.trim`.

SHA-256 of the source span: `676114594b527d98f437330e0636b1ea938b11c28ff5258c7a70a1da9f1451e4`.

### evaluation:571488

Calls written directly in this body: `MeetingHosts.siteOf`, `MeetingSite.httpsUrl`, `_GoogleMeetSite.codeOfPath`, `_GoogleMeetSite.meetingCode.test`, `_GoogleMeetSite.urlOf`, `raw.trim`.

SHA-256 of the source span: `9d651fe6ad86edb37445e8dfcb6303f189bf8b74faedc6d16e595c91155080e5`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
