# `SandMcpManager.readVisibleDisplayServers`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/integrations/README.en.md).

**Module:** `shared/node/mcp/mcp-manager.ts` · [Module README](../../../../../../modules/shared/node/mcp/mcp-manager-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:689457-689489](../../../../../../../reference/runtime/host-main.cjs#L689457-L689489) | `method` | yes | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:689457-689489](../../../../../../../reference/runtime/host-main.cjs#L689457-L689489) | 4 | 0 | 3 | 1 | 0 | 0 |

### host:689457

Calls written directly in this body: `.map`, `Object.entries`, `this.accountDisplayConfigProvider`, `this.accountSlots.noteAccountDisplayConfig`, `this.definitionSource.getUserServerConfigs`, `this.instructionsAndToggles.migrateCustomInstructions`, `this.lastAccountDisplayConfigView`, `this.readAccountServers`, `this.visibleServersOf`.

Assignment or increment targets: `accountDegraded`, `displayConfig`.

SHA-256 of the source span: `20c6b38442f8246c75c3ea3877e7b968ed4cb0c330471baec9ae5977cc1335a6`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
