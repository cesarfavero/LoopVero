# `suppliedBody`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/prompts/README.en.md).

**Module:** `agent-engine/prompts/project-prompt.js` · [Module README](../../../../../modules/agent-engine/prompts/project-prompt-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:641007-641010](../../../../../../reference/runtime/host-main.cjs#L641007-L641010) | `FunctionDeclaration` | no | `text3` |
| [evaluation:431620-431623](../../../../../../reference/runtime/sand-eval-runner.cjs#L431620-L431623) | `FunctionDeclaration` | no | `text3` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:641007-641010](../../../../../../reference/runtime/host-main.cjs#L641007-L641010) | 1 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:431620-431623](../../../../../../reference/runtime/sand-eval-runner.cjs#L431620-L431623) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:641007

Calls written directly in this body: `promptOverrideOrDefault`.

SHA-256 of the source span: `7db614692825c4bc2e86ba20e0d5d1ec5ca1cbdb1c1e8df2f79c08c72fd8e7d0`.

### evaluation:431620

Calls written directly in this body: `promptOverrideOrDefault`.

SHA-256 of the source span: `7db614692825c4bc2e86ba20e0d5d1ec5ca1cbdb1c1e8df2f79c08c72fd8e7d0`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
