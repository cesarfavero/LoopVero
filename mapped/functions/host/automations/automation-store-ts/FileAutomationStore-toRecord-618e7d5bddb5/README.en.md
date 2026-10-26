# `FileAutomationStore.toRecord`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/automations/README.en.md).

**Module:** `host/automations/automation-store.ts` · [Module README](../../../../../modules/host/automations/automation-store-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:720515-720527](../../../../../../reference/runtime/host-main.cjs#L720515-L720527) | `method` | no | `{     id,     config: config2,     deriveNextRunAt   }` |
| [evaluation:627866-627878](../../../../../../reference/runtime/sand-eval-runner.cjs#L627866-L627878) | `method` | no | `{     id,     config: config2,     deriveNextRunAt   }` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:720515-720527](../../../../../../reference/runtime/host-main.cjs#L720515-L720527) | 1 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:627866-627878](../../../../../../reference/runtime/sand-eval-runner.cjs#L627866-L627878) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:720515

Calls written directly in this body: `automationRecordFromConfig`, `earliestAutomationNextRunAt`, `this.configPath`, `this.readRuns`, `this.resolveUserTimeZone`.

SHA-256 of the source span: `97862d8cd9ebf298ccb5bba001e74847f9da7e8947efd413ac604203c9df80ac`.

### evaluation:627866

Calls written directly in this body: `automationRecordFromConfig`, `earliestAutomationNextRunAt`, `this.configPath`, `this.readRuns`, `this.resolveUserTimeZone`.

SHA-256 of the source span: `97862d8cd9ebf298ccb5bba001e74847f9da7e8947efd413ac604203c9df80ac`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
