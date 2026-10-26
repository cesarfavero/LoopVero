# `AutomationRuntime.watchSessionAutomations`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/automations/README.en.md).

**Module:** `host/extensions/transcript/automation-runtime.ts` · [Module README](../../../../../../modules/host/extensions/transcript/automation-runtime-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:733990-734004](../../../../../../../reference/runtime/host-main.cjs#L733990-L734004) | `method` | no | `session` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:733990-734004](../../../../../../../reference/runtime/host-main.cjs#L733990-L734004) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:733990

Calls written directly in this body: `session.automations.setOnChange`, `this.seedKnownAutomations`, `this.watchedAutomations.setOnChange`.

Assignment or increment targets: `this.watchedAutomations`.

SHA-256 of the source span: `c3766d743e72781420e6c0d2a7207372953876621114db770542eb6f3a52da39`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
