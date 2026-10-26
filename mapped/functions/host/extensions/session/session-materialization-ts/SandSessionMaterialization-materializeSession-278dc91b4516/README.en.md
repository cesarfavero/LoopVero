# `SandSessionMaterialization.materializeSession`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/session/session-materialization.ts` · [Module README](../../../../../../modules/host/extensions/session/session-materialization-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:721455-721516](../../../../../../../reference/runtime/host-main.cjs#L721455-L721516) | `method` | yes | `agentId, profile, origin, options2 = {}` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:721455-721516](../../../../../../../reference/runtime/host-main.cjs#L721455-L721516) | 7 | 1 | 1 | 1 | 0 | 0 |

### host:721455

Calls written directly in this body: `.createAgentStore`, `assertValidSandAgentId`, `automationStoreForDbPath`, `automations.upsert`, `channelStoreForDbPath`, `createSandProfile`, `db.set`, `db.setAgentOrigin`, `db.setAgentPurpose`, `getAgentDbPath`, `getSandSettingsPath`, `new AgentStore2`, `prepareAgentMediaStoreRoots`, `profile.avatarColor.trim`, `profile.avatarShape.trim`, `profile.description.trim`, `profile.name.trim`, `profile.title.trim`, `skillStoreForDbPath`, `this.blobStoreFor`, `this.host.createAgentDb`, `this.host.memory`, `writeSandSettingsFile`.

Assignment or increment targets: `namedBy`.

SHA-256 of the source span: `a62b8aae0b2863ffb76d8a707f873051116d2462182cc20576202f9e8c0a12d8`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
