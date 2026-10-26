# `AutomationRuntime.setAgentAutomationEnabled`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/automations/README.en.md).

**Module:** `host/extensions/transcript/automation-runtime.ts` · [Module README](../../../../../../modules/host/extensions/transcript/automation-runtime-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:734256-734265](../../../../../../../reference/runtime/host-main.cjs#L734256-L734265) | `method` | no | `agentId, automationId, isEnabled` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:734256-734265](../../../../../../../reference/runtime/host-main.cjs#L734256-L734265) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:734256

Calls written directly in this body: `this.enqueueAutomationMutation`.

SHA-256 of the source span: `2a392b251be96a3b1565bf037495e6da1dd37c80803e93b03f6bf415fcce9dee`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
