# `_MicrosoftTeamsSite.parse`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `shared/meetings/meeting-site.ts` · [Module README](../../../../../modules/shared/meetings/meeting-site-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:772337-772357](../../../../../../reference/runtime/host-main.cjs#L772337-L772357) | `method` | no | `raw` |
| [evaluation:571566-571586](../../../../../../reference/runtime/sand-eval-runner.cjs#L571566-L571586) | `method` | no | `raw` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:772337-772357](../../../../../../reference/runtime/host-main.cjs#L772337-L772357) | 9 | 1 | 0 | 3 | 0 | 0 |
| [evaluation:571566-571586](../../../../../../reference/runtime/sand-eval-runner.cjs#L571566-L571586) | 9 | 1 | 0 | 3 | 0 | 0 |

### host:772337

Calls written directly in this body: `MeetingHosts.siteOf`, `MeetingSite.httpsUrl`, `_MicrosoftTeamsSite.leadingLink.exec`, `_MicrosoftTeamsSite.leadingToken.exec`, `_MicrosoftTeamsSite.linksOtherSite`, `_MicrosoftTeamsSite.parseDialIn`, `_MicrosoftTeamsSite.parseLink`, `_MicrosoftTeamsSite.splitIdTail.test`, `linked.replace`, `raw.trim`, `rest.matchAll`, `trimmed.slice`.

SHA-256 of the source span: `69e07a78ebf66eca53d5db2e54a7869279cf8eec81904dbba478c2f729b9144f`.

### evaluation:571566

Calls written directly in this body: `MeetingHosts.siteOf`, `MeetingSite.httpsUrl`, `_MicrosoftTeamsSite.leadingLink.exec`, `_MicrosoftTeamsSite.leadingToken.exec`, `_MicrosoftTeamsSite.linksOtherSite`, `_MicrosoftTeamsSite.parseDialIn`, `_MicrosoftTeamsSite.parseLink`, `_MicrosoftTeamsSite.splitIdTail.test`, `linked.replace`, `raw.trim`, `rest.matchAll`, `trimmed.slice`.

SHA-256 of the source span: `0b7a50cb9af50ab742ffda19d2207491ae81a54157897b8028e22642c8458b79`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
