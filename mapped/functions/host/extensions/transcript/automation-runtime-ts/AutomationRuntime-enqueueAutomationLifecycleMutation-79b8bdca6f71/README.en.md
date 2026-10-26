# `AutomationRuntime.enqueueAutomationLifecycleMutation`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/automations/README.en.md).

**Module:** `host/extensions/transcript/automation-runtime.ts` · [Module README](../../../../../../modules/host/extensions/transcript/automation-runtime-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:734057-734062](../../../../../../../reference/runtime/host-main.cjs#L734057-L734062) | `method` | no | `{     agentId,     mutation   }` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:734057-734062](../../../../../../../reference/runtime/host-main.cjs#L734057-L734062) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:734057

Calls written directly in this body: `this.runOnPerAgentChain`.

SHA-256 of the source span: `6f6ac87081d77280dc0a2a8f3df283ae2064ee86af6648cff4089039d7f0aa7a`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
