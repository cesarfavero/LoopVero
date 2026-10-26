# `_MicrosoftTeamsSite.meetupJoinLink`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `shared/meetings/meeting-site.ts` · [Module README](../../../../../modules/shared/meetings/meeting-site-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:772408-772424](../../../../../../reference/runtime/host-main.cjs#L772408-L772424) | `method` | no | `{     host,     encodedThreadId,     messageId = "0",     context: context2   }` |
| [evaluation:571637-571653](../../../../../../reference/runtime/sand-eval-runner.cjs#L571637-L571653) | `method` | no | `{     host,     encodedThreadId,     messageId = "0",     context: context2   }` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:772408-772424](../../../../../../reference/runtime/host-main.cjs#L772408-L772424) | 5 | 0 | 0 | 4 | 0 | 0 |
| [evaluation:571637-571653](../../../../../../reference/runtime/sand-eval-runner.cjs#L571637-L571653) | 5 | 0 | 0 | 4 | 0 | 0 |

### host:772408

Calls written directly in this body: `_MicrosoftTeamsSite.decoded`, `_MicrosoftTeamsSite.isJSONObject`, `_MicrosoftTeamsSite.messageIdPattern.test`, `_MicrosoftTeamsSite.threadIdPattern.test`, `encodeURIComponent`.

SHA-256 of the source span: `24755e2e625b0211201ab09ae82b6997c5f262abbd2742d109c2aa63170f54ea`.

### evaluation:571637

Calls written directly in this body: `_MicrosoftTeamsSite.decoded`, `_MicrosoftTeamsSite.isJSONObject`, `_MicrosoftTeamsSite.messageIdPattern.test`, `_MicrosoftTeamsSite.threadIdPattern.test`, `encodeURIComponent`.

SHA-256 of the source span: `24755e2e625b0211201ab09ae82b6997c5f262abbd2742d109c2aa63170f54ea`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
