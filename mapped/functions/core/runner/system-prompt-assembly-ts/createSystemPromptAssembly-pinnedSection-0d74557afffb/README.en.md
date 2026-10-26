# `createSystemPromptAssembly/pinnedSection`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/prompts/README.en.md).

**Module:** `core/runner/system-prompt-assembly.ts` · [Module README](../../../../../modules/core/runner/system-prompt-assembly-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:552953-552960](../../../../../../reference/runtime/sand-eval-runner.cjs#L552953-L552960) | `FunctionDeclaration` | no | `store, name18` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:552953-552960](../../../../../../reference/runtime/sand-eval-runner.cjs#L552953-L552960) | 3 | 0 | 0 | 3 | 0 | 0 |

### evaluation:552953

Calls written directly in this body: `memoryControlPin`, `memoryFactsInUserInfo`, `memoryFactsPin`, `store.getPromptSectionSnapshot`.

SHA-256 of the source span: `3713b686680e020498d8ab55a53bdc04c1d31e6fa075c98aa377c0870b15b3d3`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
