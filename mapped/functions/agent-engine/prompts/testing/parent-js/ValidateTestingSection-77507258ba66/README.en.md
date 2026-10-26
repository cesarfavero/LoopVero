# `ValidateTestingSection`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/prompts/README.en.md).

**Module:** `agent-engine/prompts/testing/parent.js` · [Module README](../../../../../../modules/agent-engine/prompts/testing/parent-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:636339-636344](../../../../../../../reference/runtime/host-main.cjs#L636339-L636344) | `FunctionDeclaration` | no | `{ computerUseSubagentName, stepNumber, trimmed = false }` |
| [evaluation:424392-424397](../../../../../../../reference/runtime/sand-eval-runner.cjs#L424392-L424397) | `FunctionDeclaration` | no | `{ computerUseSubagentName, stepNumber, trimmed = false }` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:636339-636344](../../../../../../../reference/runtime/host-main.cjs#L636339-L636344) | 1 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:424392-424397](../../../../../../../reference/runtime/sand-eval-runner.cjs#L424392-L424397) | 1 | 0 | 0 | 2 | 0 | 0 |

### host:636339

Calls written directly in this body: `jsx`, `jsxs`.

SHA-256 of the source span: `7a0a5312a3083fae31acc34781bfff9b124b0f35a164ab445b29e0d2aea24f1a`.

### evaluation:424392

Calls written directly in this body: `jsx`, `jsxs`.

SHA-256 of the source span: `7a0a5312a3083fae31acc34781bfff9b124b0f35a164ab445b29e0d2aea24f1a`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
