# `AutomationRuntime.recordInactiveAutomationChanges`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/automations/README.en.md).

**Module:** `host/extensions/transcript/automation-runtime.ts` · [Module README](../../../../../../modules/host/extensions/transcript/automation-runtime-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:734113-734153](../../../../../../../reference/runtime/host-main.cjs#L734113-L734153) | `method` | no | `{     agentId,     before,     after,     source   }` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:734113-734153](../../../../../../../reference/runtime/host-main.cjs#L734113-L734153) | 3 | 2 | 0 | 0 | 0 | 0 |

### host:734113

Calls written directly in this body: `current2.has`, `diffAutomationAction`, `previous.get`, `snapshotAutomations`, `this.emitAutomationLifecycle`, `this.lastKnownAutomations.get`, `this.lastKnownAutomations.set`.

SHA-256 of the source span: `28c9d47b1afa14e57033c241527a2472d6818122640adbc82eb3622197a4185e`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
