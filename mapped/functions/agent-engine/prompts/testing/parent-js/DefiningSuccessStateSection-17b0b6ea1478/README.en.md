# `DefiningSuccessStateSection`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/prompts/README.en.md).

**Module:** `agent-engine/prompts/testing/parent.js` · [Module README](../../../../../../modules/agent-engine/prompts/testing/parent-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:636324-636326](../../../../../../../reference/runtime/host-main.cjs#L636324-L636326) | `FunctionDeclaration` | no | `{ isCodexModel }` |
| [evaluation:424377-424379](../../../../../../../reference/runtime/sand-eval-runner.cjs#L424377-L424379) | `FunctionDeclaration` | no | `{ isCodexModel }` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:636324-636326](../../../../../../../reference/runtime/host-main.cjs#L636324-L636326) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:424377-424379](../../../../../../../reference/runtime/sand-eval-runner.cjs#L424377-L424379) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:636324

Calls written directly in this body: `jsx`, `jsxs`.

SHA-256 of the source span: `0695da45bdc0a96d120d6aeb2b91fb9aabbcff5aff79950ef2b6ececbe3c6fcc`.

### evaluation:424377

Calls written directly in this body: `jsx`, `jsxs`.

SHA-256 of the source span: `0695da45bdc0a96d120d6aeb2b91fb9aabbcff5aff79950ef2b6ececbe3c6fcc`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
