# `isSandAutomationHandoffId`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/automations/README.en.md).

**Module:** `core/ports/automation-completions.ts` · [Module README](../../../../../modules/core/ports/automation-completions-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:716987-716989](../../../../../../reference/runtime/host-main.cjs#L716987-L716989) | `FunctionDeclaration` | no | `id` |
| [evaluation:586328-586330](../../../../../../reference/runtime/sand-eval-runner.cjs#L586328-L586330) | `FunctionDeclaration` | no | `id` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:716987-716989](../../../../../../reference/runtime/host-main.cjs#L716987-L716989) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:586328-586330](../../../../../../reference/runtime/sand-eval-runner.cjs#L586328-L586330) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:716987

Calls written directly in this body: `id.startsWith`.

SHA-256 of the source span: `160a377e3ab496daece94156a2928925812e3dcd0a85620e871d9dddf3dd0ac4`.

### evaluation:586328

Calls written directly in this body: `id.startsWith`.

SHA-256 of the source span: `160a377e3ab496daece94156a2928925812e3dcd0a85620e871d9dddf3dd0ac4`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
