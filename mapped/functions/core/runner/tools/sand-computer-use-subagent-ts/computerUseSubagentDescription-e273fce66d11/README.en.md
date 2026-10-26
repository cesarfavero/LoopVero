# `computerUseSubagentDescription`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/subagents/README.en.md).

**Module:** `core/runner/tools/sand-computer-use-subagent.ts` · [Module README](../../../../../../modules/core/runner/tools/sand-computer-use-subagent-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:525168-525186](../../../../../../../reference/runtime/sand-eval-runner.cjs#L525168-L525186) | `FunctionDeclaration` | no | `options2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:525168-525186](../../../../../../../reference/runtime/sand-eval-runner.cjs#L525168-L525186) | 3 | 0 | 0 | 2 | 0 | 0 |

### evaluation:525168

Calls written directly in this body: `.join`, `backgroundSubagentLine`, `computerUseLoginLine`, `conciseComputerUseSubagentDescription`, `dispatchSentence`, `displaySpaceSentence`, `humanHoldSentence`.

SHA-256 of the source span: `1127ce9eec6e4312572b229a4e1727f7cb4a0e6620fb4085486dc4e05c9186ac`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
