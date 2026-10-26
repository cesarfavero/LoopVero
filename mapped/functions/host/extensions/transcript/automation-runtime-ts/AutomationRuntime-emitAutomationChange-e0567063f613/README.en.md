# `AutomationRuntime.emitAutomationChange`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/automations/README.en.md).

**Module:** `host/extensions/transcript/automation-runtime.ts` · [Module README](../../../../../../modules/host/extensions/transcript/automation-runtime-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:734154-734169](../../../../../../../reference/runtime/host-main.cjs#L734154-L734169) | `method` | no | `{     agentId,     action,     automationId,     automationName,     automation,     source   }` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:734154-734169](../../../../../../../reference/runtime/host-main.cjs#L734154-L734169) | 0 | 0 | 0 | 0 | 0 | 0 |

### host:734154

Calls written directly in this body: `this.emitAutomationLifecycle`, `this.tm.emitTimelineEvent`.

SHA-256 of the source span: `785fc843e94ad8cad80462fc026a655bae64f50716f2e5db4cc1aed8b830f554`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
