# `renderChannelPlatformGuideLines`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `shared/channels/channel-messaging.ts` · [Module README](../../../../../modules/shared/channels/channel-messaging-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:474575-474585](../../../../../../reference/runtime/sand-eval-runner.cjs#L474575-L474585) | `FunctionDeclaration` | no | `manifests` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:474575-474585](../../../../../../reference/runtime/sand-eval-runner.cjs#L474575-L474585) | 1 | 2 | 0 | 1 | 0 | 0 |

### evaluation:474575

Calls written directly in this body: `connectorCopyForPrompt`, `lines2.push`, `manifest.connectGuide.split`.

SHA-256 of the source span: `bb56b65fb2dd92162ada9bb33e67987c7e5980844da6b41ce46555b40b5b5fdc`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
