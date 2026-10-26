# `delegationPromptSections`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/prompts/README.en.md).

**Module:** `core/runner/prompt-sections/multitask-prompt.ts` · [Module README](../../../../../../modules/core/runner/prompt-sections/multitask-prompt-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:754474-754510](../../../../../../../reference/runtime/host-main.cjs#L754474-L754510) | `FunctionDeclaration` | no | `toolName, offers = {}` |
| [evaluation:537177-537213](../../../../../../../reference/runtime/sand-eval-runner.cjs#L537177-L537213) | `FunctionDeclaration` | no | `toolName, offers = {}` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:754474-754510](../../../../../../../reference/runtime/host-main.cjs#L754474-L754510) | 2 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:537177-537213](../../../../../../../reference/runtime/sand-eval-runner.cjs#L537177-L537213) | 2 | 0 | 0 | 1 | 0 | 0 |

### host:754474

Calls written directly in this body: `.join`, `executorBuildsVisualsLine`, `executorWritesPagesLine`, `userDelegationTail`.

SHA-256 of the source span: `9ea5dcc6e988129fdac56f6875c69471b876e8b67cbb6a6758534876708a0564`.

### evaluation:537177

Calls written directly in this body: `.join`, `executorBuildsVisualsLine`, `executorWritesPagesLine`, `userDelegationTail`.

SHA-256 of the source span: `9ea5dcc6e988129fdac56f6875c69471b876e8b67cbb6a6758534876708a0564`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
