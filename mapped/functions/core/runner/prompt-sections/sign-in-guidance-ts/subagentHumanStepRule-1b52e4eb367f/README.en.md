# `subagentHumanStepRule`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/prompts/README.en.md).

**Module:** `core/runner/prompt-sections/sign-in-guidance.ts` · [Module README](../../../../../../modules/core/runner/prompt-sections/sign-in-guidance-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:751619-751625](../../../../../../../reference/runtime/host-main.cjs#L751619-L751625) | `FunctionDeclaration` | no | `{   contradictionFixes,   secureValues = false,   passwordRules }` |
| [evaluation:524512-524518](../../../../../../../reference/runtime/sand-eval-runner.cjs#L524512-L524518) | `FunctionDeclaration` | no | `{   contradictionFixes,   secureValues = false,   passwordRules }` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:751619-751625](../../../../../../../reference/runtime/host-main.cjs#L751619-L751625) | 3 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:524512-524518](../../../../../../../reference/runtime/sand-eval-runner.cjs#L524512-L524518) | 3 | 0 | 0 | 1 | 0 | 0 |

### host:751619

Calls written directly in this body: no calls identifiable by name.

SHA-256 of the source span: `235f27225d35d33881de30cdc2a51798205dd057d4945e379e43c926c0ec3eab`.

### evaluation:524512

Calls written directly in this body: no calls identifiable by name.

SHA-256 of the source span: `235f27225d35d33881de30cdc2a51798205dd057d4945e379e43c926c0ec3eab`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
