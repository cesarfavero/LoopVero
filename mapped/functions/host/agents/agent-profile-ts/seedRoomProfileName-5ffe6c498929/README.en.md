# `seedRoomProfileName`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `host/agents/agent-profile.ts` · [Module README](../../../../../modules/host/agents/agent-profile-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:491628-491641](../../../../../../reference/runtime/host-main.cjs#L491628-L491641) | `FunctionDeclaration` | no | `seed` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:491628-491641](../../../../../../reference/runtime/host-main.cjs#L491628-L491641) | 2 | 0 | 0 | 2 | 0 | 0 |

### host:491628

Calls written directly in this body: `conversationNameFromPrompt`, `getSandProfilePath`, `isUnnamedSingleBotRoom`, `readSandGroupConfig`, `readSandProfileFile`, `stampAppProfileName`.

SHA-256 of the source span: `e7a0eb1bd03a012e19836eda869d8cf21efa582d444cca6a8dd6b8bb9cb1522f`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
