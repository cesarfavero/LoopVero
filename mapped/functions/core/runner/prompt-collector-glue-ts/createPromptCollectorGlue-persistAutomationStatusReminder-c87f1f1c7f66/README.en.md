# `createPromptCollectorGlue/persistAutomationStatusReminder`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/prompts/README.en.md).

**Module:** `core/runner/prompt-collector-glue.ts` · [Module README](../../../../../modules/core/runner/prompt-collector-glue-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:533736-533747](../../../../../../reference/runtime/sand-eval-runner.cjs#L533736-L533747) | `FunctionDeclaration` | no | `reminder, compactionEpoch` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:533736-533747](../../../../../../reference/runtime/sand-eval-runner.cjs#L533736-L533747) | 2 | 0 | 0 | 2 | 0 | 0 |

### evaluation:533736

Calls written directly in this body: `snapshots.getPromptSectionSnapshot`, `snapshots.setPromptSectionSnapshot`.

SHA-256 of the source span: `18a76eb4e2cd9e6d73203827cf3a13b206d4ed64d20af5b0624b59f5857abb7f`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
