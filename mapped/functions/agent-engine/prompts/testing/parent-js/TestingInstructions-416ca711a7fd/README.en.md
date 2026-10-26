# `TestingInstructions`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/prompts/README.en.md).

**Module:** `agent-engine/prompts/testing/parent.js` · [Module README](../../../../../../modules/agent-engine/prompts/testing/parent-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:636348-636357](../../../../../../../reference/runtime/host-main.cjs#L636348-L636357) | `FunctionDeclaration` | no | `options2` |
| [evaluation:424401-424410](../../../../../../../reference/runtime/sand-eval-runner.cjs#L424401-L424410) | `FunctionDeclaration` | no | `options2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:636348-636357](../../../../../../../reference/runtime/host-main.cjs#L636348-L636357) | 4 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:424401-424410](../../../../../../../reference/runtime/sand-eval-runner.cjs#L424401-L424410) | 4 | 0 | 0 | 1 | 0 | 0 |

### host:636348

Calls written directly in this body: `.find`, `jsx`, `jsxs`, `resolvePromptArtifactsDir`.

SHA-256 of the source span: `3699418b418015631693e87bea980b490dedea896fa9ae5e1f78b6202bede190`.

### evaluation:424401

Calls written directly in this body: `.find`, `jsx`, `jsxs`, `resolvePromptArtifactsDir`.

SHA-256 of the source span: `3699418b418015631693e87bea980b490dedea896fa9ae5e1f78b6202bede190`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
