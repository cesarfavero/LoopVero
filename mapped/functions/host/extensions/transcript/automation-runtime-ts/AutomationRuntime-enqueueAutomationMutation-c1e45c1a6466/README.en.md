# `AutomationRuntime.enqueueAutomationMutation`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/automations/README.en.md).

**Module:** `host/extensions/transcript/automation-runtime.ts` · [Module README](../../../../../../modules/host/extensions/transcript/automation-runtime-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:734078-734112](../../../../../../../reference/runtime/host-main.cjs#L734078-L734112) | `method` | no | `{     agentId,     activeMutation,     inactiveMutation   }` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:734078-734112](../../../../../../../reference/runtime/host-main.cjs#L734078-L734112) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:734078

Calls written directly in this body: `this.enqueueAutomationLifecycleMutation`.

SHA-256 of the source span: `5d81e6175c854d0a71ab598680b362c08c72ca660c1d80f9126ed8fabbd28fc4`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
