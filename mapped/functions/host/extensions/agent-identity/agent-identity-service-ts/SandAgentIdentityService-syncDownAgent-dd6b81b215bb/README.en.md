# `SandAgentIdentityService.syncDownAgent`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/agent-identity/agent-identity-service.ts` · [Module README](../../../../../../modules/host/extensions/agent-identity/agent-identity-service-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:495972-496005](../../../../../../../reference/runtime/host-main.cjs#L495972-L496005) | `method` | yes | `root, agent` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:495972-496005](../../../../../../../reference/runtime/host-main.cjs#L495972-L496005) | 8 | 0 | 3 | 4 | 0 | 0 |

### host:495972

Calls written directly in this body: `agent.name.trim`, `assertSandProfileNotLinked`, `getSandProfilePath`, `identityFromRowKeepingNamedBy`, `local.name.trim`, `mirrorDraftingDisabled`, `readSandProfileFile`, `seededGroupChatTitleRepair`, `this.bindDirToRow`, `this.deferBindUntilEditPushed`, `this.deletedAgents.has`, `this.deps.onBoxAgentRenamed`, `this.expectedEditCounts.has`, `this.keptServerTitles.has`, `this.keptServerTitles.set`, `this.noteAgentIdentityChanged`, `this.noteRoomPeople`, `this.pendingEditIds.has`, `this.prepareMediaRoots`, `this.rememberServerIdentity`, `this.repairGroupChatTitle`, `this.unacknowledgedEditIds.delete`, `this.unacknowledgedEditIds.has`.

SHA-256 of the source span: `0a872450d8d0656ac92b4714fcf36ae43406bc43e9aa148b373752bb79f5a43f`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
