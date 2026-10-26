# `AutomationRuntime.seedKnownAutomations`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/automations/README.en.md).

**Module:** `host/extensions/transcript/automation-runtime.ts` · [Module README](../../../../../../modules/host/extensions/transcript/automation-runtime-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:734005-734011](../../../../../../../reference/runtime/host-main.cjs#L734005-L734011) | `method` | no | `session` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:734005-734011](../../../../../../../reference/runtime/host-main.cjs#L734005-L734011) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:734005

Calls written directly in this body: `session.automations.listDefinitions`, `snapshotAutomations`, `this.lastKnownAutomations.has`, `this.lastKnownAutomations.set`.

SHA-256 of the source span: `1d5824e00f5450cd4e34f382a3bcff2a17a06d11a6cf2b001d91a495c9c299fe`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
