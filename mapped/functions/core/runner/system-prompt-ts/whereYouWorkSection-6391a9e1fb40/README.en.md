# `whereYouWorkSection`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/prompts/README.en.md).

**Module:** `core/runner/system-prompt.ts` · [Module README](../../../../../modules/core/runner/system-prompt-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:532818-532845](../../../../../../reference/runtime/sand-eval-runner.cjs#L532818-L532845) | `FunctionDeclaration` | no | `options2, codeChangesRef` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:532818-532845](../../../../../../reference/runtime/sand-eval-runner.cjs#L532818-L532845) | 6 | 0 | 0 | 1 | 0 | 0 |

### evaluation:532818

Calls written directly in this body: `connectorSearchFirstLine`, `offeredWebToolNames`, `publicWebToolsLine`, `sandMcpMetaToolNames`, `unblockResearchApplies`, `unblockResearchPointer`, `userComputerLinesFor`.

SHA-256 of the source span: `c0fa614ae7c0b9dbb1b1145cf2a44375219f0a6f35897ba194b909a407fa5d9b`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
