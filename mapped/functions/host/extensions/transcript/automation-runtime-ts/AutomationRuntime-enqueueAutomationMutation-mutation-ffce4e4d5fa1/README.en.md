# `AutomationRuntime.enqueueAutomationMutation/mutation`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/automations/README.en.md).

**Module:** `host/extensions/transcript/automation-runtime.ts` · [Module README](../../../../../../modules/host/extensions/transcript/automation-runtime-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:734085-734110](../../../../../../../reference/runtime/host-main.cjs#L734085-L734110) | `ArrowFunctionExpression` | no | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:734085-734110](../../../../../../../reference/runtime/host-main.cjs#L734085-L734110) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:734085

Calls written directly in this body: `activeMutation`, `inactiveMutation`, `this.publishAutomations`, `this.recordAutomationChangeEvents`, `this.recordInactiveAutomationChanges`, `this.tm.sessionStore.listAgentAutomations`.

Assignment or increment targets: `after`.

SHA-256 of the source span: `02a7a43e157e7308e4dff76ae6c106694eb92148ca76aa19f855f5616eca859d`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
