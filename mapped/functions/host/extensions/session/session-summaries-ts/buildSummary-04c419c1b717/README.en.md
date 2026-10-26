# `buildSummary`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/context-compaction/README.en.md).

**Module:** `host/extensions/session/session-summaries.ts` · [Module README](../../../../../../modules/host/extensions/session/session-summaries-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:722647-722720](../../../../../../../reference/runtime/host-main.cjs#L722647-L722720) | `FunctionDeclaration` | yes | `args` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:722647-722720](../../../../../../../reference/runtime/host-main.cjs#L722647-L722720) | 10 | 0 | 3 | 2 | 0 | 0 |

### host:722647

Calls written directly in this body: `Math.floor`, `Math.max`, `Number`, `agentHasDurableFootprint`, `description9.trim`, `ensureSettingsFile`, `fileProfile.name.trim`, `getSandProfilePath`, `getSandSettingsPath`, `groupConfig.memberIds.filter`, `hasPlaceholderProfileName`, `normalizeSandVoiceId`, `normalizeSandVoiceLanguage`, `normalizeSandVoiceSpeed`, `orNull`, `readAvatarWithinDir`, `readLegacyProfileAvatarField`, `readSandGroupConfig`, `readSandProfileCreationMetadata`, `readSandProfileFile`, `readSandProfileHarness`, `readSandSettingsFile`, `resolveDerivedAvatarFilename`.

SHA-256 of the source span: `417924132b82a5d29ab55fd3a6d9068d850516f7b63733c27afc00d3b9d5461b`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
