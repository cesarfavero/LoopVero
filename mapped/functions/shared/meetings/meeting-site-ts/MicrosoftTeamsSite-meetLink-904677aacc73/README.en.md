# `_MicrosoftTeamsSite.meetLink`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `shared/meetings/meeting-site.ts` · [Module README](../../../../../modules/shared/meetings/meeting-site-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:772399-772407](../../../../../../reference/runtime/host-main.cjs#L772399-L772407) | `method` | no | `{     host,     meetingId,     passcode   }` |
| [evaluation:571628-571636](../../../../../../reference/runtime/sand-eval-runner.cjs#L571628-L571636) | `method` | no | `{     host,     meetingId,     passcode   }` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:772399-772407](../../../../../../reference/runtime/host-main.cjs#L772399-L772407) | 2 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:571628-571636](../../../../../../reference/runtime/sand-eval-runner.cjs#L571628-L571636) | 2 | 0 | 0 | 2 | 0 | 0 |

### host:772399

Calls written directly in this body: `_MicrosoftTeamsSite.meetingIdPattern.test`, `encodeURIComponent`.

SHA-256 of the source span: `405dd9c9d8b6e64538036182d007226ab098ab85b27b0737bd17b40d8dcbe3ea`.

### evaluation:571628

Calls written directly in this body: `_MicrosoftTeamsSite.meetingIdPattern.test`, `encodeURIComponent`.

SHA-256 of the source span: `405dd9c9d8b6e64538036182d007226ab098ab85b27b0737bd17b40d8dcbe3ea`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
