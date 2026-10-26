# `renderChannelsSystemPrompt`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `shared/channels/channel-messaging.ts` · [Module README](../../../../../modules/shared/channels/channel-messaging-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:474586-474632](../../../../../../reference/runtime/sand-eval-runner.cjs#L474586-L474632) | `FunctionDeclaration` | no | `manifests, connections, location, options2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:474586-474632](../../../../../../reference/runtime/sand-eval-runner.cjs#L474586-L474632) | 6 | 1 | 0 | 3 | 0 | 0 |

### evaluation:474586

Calls written directly in this body: `.join`, `channelsAddressLine`, `channelsLocationLine`, `comingSoon.map`, `describeConnection`, `hasChannelsToShow`, `hasLiveConnection`, `lines2.join`, `lines2.push`, `manifests.filter`, `renderChannelPlatformGuideLines`, `shownManifests.filter`.

SHA-256 of the source span: `a62cb5e4008ceb9663fac2c3bee9884b459e35ad122a4a59d56a36946b98607e`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
