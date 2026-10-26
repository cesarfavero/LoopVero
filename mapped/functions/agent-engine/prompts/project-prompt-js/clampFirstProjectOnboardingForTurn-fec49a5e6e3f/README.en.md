# `clampFirstProjectOnboardingForTurn`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/prompts/README.en.md).

**Module:** `agent-engine/prompts/project-prompt.js` · [Module README](../../../../../modules/agent-engine/prompts/project-prompt-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:641144-641152](../../../../../../reference/runtime/host-main.cjs#L641144-L641152) | `FunctionDeclaration` | no | `onboarding, priorTurnCount` |
| [evaluation:431757-431765](../../../../../../reference/runtime/sand-eval-runner.cjs#L431757-L431765) | `FunctionDeclaration` | no | `onboarding, priorTurnCount` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:641144-641152](../../../../../../reference/runtime/host-main.cjs#L641144-L641152) | 2 | 0 | 0 | 3 | 0 | 0 |
| [evaluation:431757-431765](../../../../../../reference/runtime/sand-eval-runner.cjs#L431757-L431765) | 2 | 0 | 0 | 3 | 0 | 0 |

### host:641144

Calls written directly in this body: no calls identifiable by name.

SHA-256 of the source span: `96161f25858d543a0ae9313753d0523b56800ca1e250f134c910a3983b8ec244`.

### evaluation:431757

Calls written directly in this body: no calls identifiable by name.

SHA-256 of the source span: `96161f25858d543a0ae9313753d0523b56800ca1e250f134c910a3983b8ec244`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
