# `AutomationRuntime.recordAutomationChangeEvents`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/automations/README.en.md).

**Module:** `host/extensions/transcript/automation-runtime.ts` · [Module README](../../../../../../modules/host/extensions/transcript/automation-runtime-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:734012-734056](../../../../../../../reference/runtime/host-main.cjs#L734012-L734056) | `method` | no | `session, source` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:734012-734056](../../../../../../../reference/runtime/host-main.cjs#L734012-L734056) | 6 | 2 | 0 | 3 | 0 | 0 |

### host:734012

Calls written directly in this body: `current2.has`, `diffAutomationAction`, `previous.get`, `session.automations.listDefinitions`, `snapshotAutomations`, `this.emitAutomationChange`, `this.lastKnownAutomations.get`, `this.lastKnownAutomations.set`, `this.tm.sessions.isAgentGone`.

SHA-256 of the source span: `7388a127a2e9ebf814e97d5ddc0b6ee8694df33a9b5db8944d00e8f48f9c609c`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
