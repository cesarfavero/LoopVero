# `AutomationRuntime.deleteAgentAutomation/activeMutation`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/automations/README.en.md).

**Module:** `host/extensions/transcript/automation-runtime.ts` · [Module README](../../../../../../modules/host/extensions/transcript/automation-runtime-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:734289-734292](../../../../../../../reference/runtime/host-main.cjs#L734289-L734292) | `ArrowFunctionExpression` | no | `active` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:734289-734292](../../../../../../../reference/runtime/host-main.cjs#L734289-L734292) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:734289

Calls written directly in this body: `.slice`, `active.automations.list`, `active.automations.remove`.

SHA-256 of the source span: `20dbfe938f4f355b95dc2f76b7adba90a634683c867b44fc15f7847107153a65`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
