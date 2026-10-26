# `SettingsService.setHostSettings`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/settings/settings-service.ts` · [Module README](../../../../../../modules/host/extensions/settings/settings-service-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:728592-728700](../../../../../../../reference/runtime/host-main.cjs#L728592-L728700) | `method` | no | `update` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:728592-728700](../../../../../../../reference/runtime/host-main.cjs#L728592-L728700) | 27 | 3 | 0 | 1 | 0 | 0 |

### host:728592

Calls written directly in this body: `.map`, `Number.isSafeInteger`, `Object.entries`, `Object.fromEntries`, `isValidIanaTimeZone`, `listener`, `normalizeSandLocalToolPermission`, `sandComputerUseModelSchema.safeParse`, `storedSandSettingText`, `this.announceChange`, `this.getHostSettings`, `this.getSelectedTeamId`, `this.setLocalToolPermission`, `this.store.clearAccountScope`, `this.store.getUserTimeZone`, `this.store.scopeToAccount`, `this.store.setAutoReviewInstructions`, `this.store.setComputerUseModel`, `this.store.setHasSeenOnboarding`, `this.store.setLocalToolPermissionsForMachines`, `this.store.setMcpBoxServers`, `this.store.setMcpCustomInstructions`, `this.store.setMcpCustomInstructionsByServerId`, `this.store.setMcpDisabledToolsByServerId`, `this.store.setMessagesEnabled`, `this.store.setNotificationConfig`, `this.store.setPinnedAgentIds`, `this.store.setSelectedTeam`, `this.store.setSidebarSections`, `this.store.setToolPermissions`, `this.store.setUserTimeZone`, `this.store.setUserTimeZoneOverride`, `this.store.setWebauthnProxyEnabled`.

Assignment or increment targets: `this.experimentOverrides`, `this.featureFlagOverrides`, `this.lastAnnouncedSelectedTeamId`, `this.osLocale`.

SHA-256 of the source span: `789bf69d5007fc1c2842d7ab878e9d21910ed23b8c237df2b206ef9b1c5eaa66`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
