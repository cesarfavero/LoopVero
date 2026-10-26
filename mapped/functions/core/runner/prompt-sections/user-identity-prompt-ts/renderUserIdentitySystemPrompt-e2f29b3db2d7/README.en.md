# `renderUserIdentitySystemPrompt`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/prompts/README.en.md).

**Module:** `core/runner/prompt-sections/user-identity-prompt.ts` · [Module README](../../../../../../modules/core/runner/prompt-sections/user-identity-prompt-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:537243-537247](../../../../../../../reference/runtime/sand-eval-runner.cjs#L537243-L537247) | `FunctionDeclaration` | no | `fullName` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:537243-537247](../../../../../../../reference/runtime/sand-eval-runner.cjs#L537243-L537247) | 1 | 0 | 0 | 2 | 0 | 0 |

### evaluation:537243

Calls written directly in this body: `normalizeSandUserFullName`.

SHA-256 of the source span: `273dd45b1eedc57c84405038db72eb8378c17069382ea23ee2638dfe2cbc01cf`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
