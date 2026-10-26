# `_MicrosoftTeamsSite.parseLink`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `shared/meetings/meeting-site.ts` · [Module README](../../../../../modules/shared/meetings/meeting-site-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:772358-772378](../../../../../../reference/runtime/host-main.cjs#L772358-L772378) | `method` | no | `link` |
| [evaluation:571587-571607](../../../../../../reference/runtime/sand-eval-runner.cjs#L571587-L571607) | `method` | no | `link` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:772358-772378](../../../../../../reference/runtime/host-main.cjs#L772358-L772378) | 3 | 0 | 0 | 4 | 0 | 0 |
| [evaluation:571587-571607](../../../../../../reference/runtime/sand-eval-runner.cjs#L571587-L571607) | 3 | 0 | 0 | 4 | 0 | 0 |

### host:772358

Calls written directly in this body: `.filter`, `_MicrosoftTeamsSite.meetLink`, `_MicrosoftTeamsSite.meetupJoinLink`, `head.toLowerCase`, `link.hostname.toLowerCase`, `link.pathname.split`, `link.searchParams.get`, `second.toLowerCase`.

SHA-256 of the source span: `f22c361f1f08a6653a9311f488618472d99583d92830c49c25a7f60c9aafa541`.

### evaluation:571587

Calls written directly in this body: `.filter`, `_MicrosoftTeamsSite.meetLink`, `_MicrosoftTeamsSite.meetupJoinLink`, `head.toLowerCase`, `link.hostname.toLowerCase`, `link.pathname.split`, `link.searchParams.get`, `second.toLowerCase`.

SHA-256 of the source span: `f22c361f1f08a6653a9311f488618472d99583d92830c49c25a7f60c9aafa541`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
