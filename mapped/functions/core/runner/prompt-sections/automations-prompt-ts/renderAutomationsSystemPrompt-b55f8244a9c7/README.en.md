# `renderAutomationsSystemPrompt`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/automations/README.en.md).

**Module:** `core/runner/prompt-sections/automations-prompt.ts` · [Module README](../../../../../../modules/core/runner/prompt-sections/automations-prompt-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:528514-528542](../../../../../../../reference/runtime/sand-eval-runner.cjs#L528514-L528542) | `FunctionDeclaration` | no | `location, timeZone, options2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:528514-528542](../../../../../../../reference/runtime/sand-eval-runner.cjs#L528514-L528542) | 10 | 0 | 0 | 4 | 0 | 0 |

### evaluation:528514

Calls written directly in this body: `.join`, `renderAutomationsRecipeLines`.

SHA-256 of the source span: `ac7ee6236bf47154a5dc0b5573d055f3919a0e8939697902c8c2fe4ff6bb4207`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
