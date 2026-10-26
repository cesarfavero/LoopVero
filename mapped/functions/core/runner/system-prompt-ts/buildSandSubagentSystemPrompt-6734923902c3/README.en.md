# `buildSandSubagentSystemPrompt`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/prompts/README.en.md).

**Module:** `core/runner/system-prompt.ts` · [Module README](../../../../../modules/core/runner/system-prompt-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:532567-532591](../../../../../../reference/runtime/sand-eval-runner.cjs#L532567-L532591) | `FunctionDeclaration` | no | `args` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:532567-532591](../../../../../../reference/runtime/sand-eval-runner.cjs#L532567-L532591) | 9 | 0 | 0 | 1 | 0 | 0 |

### evaluation:532567

Calls written directly in this body: `.filter`, `.join`, `isUserComputerUseSubagentType`, `sandSubagentEmailPromptLine`, `sandSubagentSafetyPromptSection`.

Assignment or increment targets: `deliveryInstruction`, `noUserLine`.

SHA-256 of the source span: `65a35ce8f33a995034a6c359e31d9773deb3c2d54b7229e3e45f73adb09af9e8`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
