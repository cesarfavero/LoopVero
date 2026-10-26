# `SandAgentSessionStore.constructor`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/session/agent-session.ts` · [Module README](../../../../../../modules/host/extensions/session/agent-session-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:723016-723090](../../../../../../../reference/runtime/host-main.cjs#L723016-L723090) | `method` | no | `reportHostLog, rootDir = getSandAgentsRootDir(), resolveUserTimeZone = () => void 0, createBlobWorkerPool = () => new AgentWorkerPool({ reportHostLog }), seams = {}` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:723016-723090](../../../../../../../reference/runtime/host-main.cjs#L723016-L723090) | 0 | 0 | 0 | 0 | 0 | 0 |

### host:723016

Calls written directly in this body: `createSandDurableFileOwner`, `getConnectorSecretsRoot`, `new SandConnectorSecretStore`, `new SandSessionConversationState`, `new SandSessionMaterialization`.

Assignment or increment targets: `this.connectorSecrets`, `this.conversationState`, `this.createAgentDb`, `this.materialization`, `this.reportHostLog`, `this.resolveUserTimeZone`, `this.rootDir`, `this.statIfExists`.

SHA-256 of the source span: `9dda1742589ea79fa18eab92cb935d45aa66f36922676fa9e1c073a7e143c01d`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
