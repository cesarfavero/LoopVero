# `AutomationRuntime.updateAgentAutomation`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/automations/README.en.md).

**Module:** `host/extensions/transcript/automation-runtime.ts` · [Module README](../../../../../../modules/host/extensions/transcript/automation-runtime-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:734276-734285](../../../../../../../reference/runtime/host-main.cjs#L734276-L734285) | `method` | no | `agentId, automationId, spec` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:734276-734285](../../../../../../../reference/runtime/host-main.cjs#L734276-L734285) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:734276

Calls written directly in this body: `this.enqueueAutomationMutation`.

SHA-256 of the source span: `c6868583c2700c08afb5ed898dbd062eae3906debdc41955011a039f26ad34c6`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
