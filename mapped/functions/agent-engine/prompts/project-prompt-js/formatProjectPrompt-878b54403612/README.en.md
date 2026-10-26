# `formatProjectPrompt`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/prompts/README.en.md).

**Module:** `agent-engine/prompts/project-prompt.js` · [Module README](../../../../../modules/agent-engine/prompts/project-prompt-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:641174-641207](../../../../../../reference/runtime/host-main.cjs#L641174-L641207) | `FunctionDeclaration` | no | `kind, options2 = {}` |
| [evaluation:431787-431820](../../../../../../reference/runtime/sand-eval-runner.cjs#L431787-L431820) | `FunctionDeclaration` | no | `kind, options2 = {}` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:641174-641207](../../../../../../reference/runtime/host-main.cjs#L641174-L641207) | 8 | 0 | 0 | 4 | 1 | 0 |
| [evaluation:431787-431820](../../../../../../reference/runtime/sand-eval-runner.cjs#L431787-L431820) | 8 | 0 | 0 | 4 | 1 | 0 |

### host:641174

Calls written directly in this body: `formatFirstProjectOnboardingOverlay`, `new Error`, `openingLine`, `promptOverrideOrDefault`, `rootPromptFrom`, `suppliedBody`.

Explicit throw targets: `Error`.

SHA-256 of the source span: `732e31dc1bcc3c15cd2fcd077ac0c4adc7e7893055b4683f32e4379ee8478182`.

### evaluation:431787

Calls written directly in this body: `formatFirstProjectOnboardingOverlay`, `new Error`, `openingLine`, `promptOverrideOrDefault`, `rootPromptFrom`, `suppliedBody`.

Explicit throw targets: `Error`.

SHA-256 of the source span: `732e31dc1bcc3c15cd2fcd077ac0c4adc7e7893055b4683f32e4379ee8478182`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
