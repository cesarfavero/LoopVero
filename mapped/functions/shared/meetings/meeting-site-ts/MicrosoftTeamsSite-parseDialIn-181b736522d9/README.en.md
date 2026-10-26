# `_MicrosoftTeamsSite.parseDialIn`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `shared/meetings/meeting-site.ts` · [Module README](../../../../../modules/shared/meetings/meeting-site-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:772379-772391](../../../../../../reference/runtime/host-main.cjs#L772379-L772391) | `method` | no | `text3` |
| [evaluation:571608-571620](../../../../../../reference/runtime/sand-eval-runner.cjs#L571608-L571620) | `method` | no | `text3` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:772379-772391](../../../../../../reference/runtime/host-main.cjs#L772379-L772391) | 3 | 0 | 0 | 4 | 0 | 0 |
| [evaluation:571608-571620](../../../../../../reference/runtime/sand-eval-runner.cjs#L571608-L571620) | 3 | 0 | 0 | 4 | 0 | 0 |

### host:772379

Calls written directly in this body: `_MicrosoftTeamsSite.dialInPattern.exec`, `_MicrosoftTeamsSite.linksOtherSite`, `_MicrosoftTeamsSite.meetLink`, `_MicrosoftTeamsSite.teamsMention.test`, `spacedId.replace`, `text3.replace`.

SHA-256 of the source span: `059983b3b1119d5bae7c194075a498d22da4fde47f24858c7116615539e4d639`.

### evaluation:571608

Calls written directly in this body: `_MicrosoftTeamsSite.dialInPattern.exec`, `_MicrosoftTeamsSite.linksOtherSite`, `_MicrosoftTeamsSite.meetLink`, `_MicrosoftTeamsSite.teamsMention.test`, `spacedId.replace`, `text3.replace`.

SHA-256 of the source span: `059983b3b1119d5bae7c194075a498d22da4fde47f24858c7116615539e4d639`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
