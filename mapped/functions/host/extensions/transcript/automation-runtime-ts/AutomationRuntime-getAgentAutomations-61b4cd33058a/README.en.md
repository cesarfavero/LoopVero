# `AutomationRuntime.getAgentAutomations`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/automations/README.en.md).

**Module:** `host/extensions/transcript/automation-runtime.ts` · [Module README](../../../../../../modules/host/extensions/transcript/automation-runtime-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:734243-734249](../../../../../../../reference/runtime/host-main.cjs#L734243-L734249) | `method` | yes | `agentId` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:734243-734249](../../../../../../../reference/runtime/host-main.cjs#L734243-L734249) | 1 | 0 | 0 | 2 | 0 | 0 |

### host:734243

Calls written directly in this body: `.slice`, `active.automations.list`, `this.tm.sessionStore.listAgentAutomations`.

SHA-256 of the source span: `8ac2276783c0f8db5b372ad41ef00d385d40a57fdc0960d97b20fd9a858b29a9`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
