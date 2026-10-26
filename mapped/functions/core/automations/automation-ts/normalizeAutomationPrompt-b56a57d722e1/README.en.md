# `normalizeAutomationPrompt`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/automations/README.en.md).

**Module:** `core/automations/automation.ts` · [Module README](../../../../../modules/core/automations/automation-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:715074-715076](../../../../../../reference/runtime/host-main.cjs#L715074-L715076) | `FunctionDeclaration` | no | `prompt` |
| [evaluation:527197-527199](../../../../../../reference/runtime/sand-eval-runner.cjs#L527197-L527199) | `FunctionDeclaration` | no | `prompt` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:715074-715076](../../../../../../reference/runtime/host-main.cjs#L715074-L715076) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:527197-527199](../../../../../../reference/runtime/sand-eval-runner.cjs#L527197-L527199) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:715074

Calls written directly in this body: `prompt.trim`.

SHA-256 of the source span: `865e81b4c4acaedf59821a9348270a4d08cc4ec3b0857f7596e35867718c2f93`.

### evaluation:527197

Calls written directly in this body: `prompt.trim`.

SHA-256 of the source span: `865e81b4c4acaedf59821a9348270a4d08cc4ec3b0857f7596e35867718c2f93`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
