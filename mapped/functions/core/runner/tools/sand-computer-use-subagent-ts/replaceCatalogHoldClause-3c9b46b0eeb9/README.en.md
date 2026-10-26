# `replaceCatalogHoldClause`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/subagents/README.en.md).

**Module:** `core/runner/tools/sand-computer-use-subagent.ts` · [Module README](../../../../../../modules/core/runner/tools/sand-computer-use-subagent-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:525139-525144](../../../../../../../reference/runtime/sand-eval-runner.cjs#L525139-L525144) | `FunctionDeclaration` | no | `signIn, holdSentence` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:525139-525144](../../../../../../../reference/runtime/sand-eval-runner.cjs#L525139-L525144) | 1 | 0 | 0 | 1 | 0 | 0 |

### evaluation:525139

Calls written directly in this body: `signIn.indexOf`, `signIn.slice`.

SHA-256 of the source span: `6fe766dcaec46f2367c66cdc520f7a9c7b646d6f503f5457e6ab89bea949fb02`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
