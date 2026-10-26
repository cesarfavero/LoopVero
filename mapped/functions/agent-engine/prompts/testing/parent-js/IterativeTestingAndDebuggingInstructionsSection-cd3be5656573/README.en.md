# `IterativeTestingAndDebuggingInstructionsSection`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/prompts/README.en.md).

**Module:** `agent-engine/prompts/testing/parent.js` · [Module README](../../../../../../modules/agent-engine/prompts/testing/parent-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:636319-636323](../../../../../../../reference/runtime/host-main.cjs#L636319-L636323) | `FunctionDeclaration` | no | `options2` |
| [evaluation:424372-424376](../../../../../../../reference/runtime/sand-eval-runner.cjs#L424372-L424376) | `FunctionDeclaration` | no | `options2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:636319-636323](../../../../../../../reference/runtime/host-main.cjs#L636319-L636323) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:424372-424376](../../../../../../../reference/runtime/sand-eval-runner.cjs#L424372-L424376) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:636319

Calls written directly in this body: `jsx`, `jsxs`.

SHA-256 of the source span: `2c1f2dab2d6ce93aeaab89068c6b07279f8c4cb0e65b94b4555565c26dcfae14`.

### evaluation:424372

Calls written directly in this body: `jsx`, `jsxs`.

SHA-256 of the source span: `2c1f2dab2d6ce93aeaab89068c6b07279f8c4cb0e65b94b4555565c26dcfae14`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
