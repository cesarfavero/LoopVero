# `normalizePromptArtifactsDir`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/prompts/README.en.md).

**Module:** `agent-engine/prompts/shared.js` · [Module README](../../../../../modules/agent-engine/prompts/shared-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:636135-636140](../../../../../../reference/runtime/host-main.cjs#L636135-L636140) | `FunctionDeclaration` | no | `artifactsDir` |
| [evaluation:424191-424196](../../../../../../reference/runtime/sand-eval-runner.cjs#L424191-L424196) | `FunctionDeclaration` | no | `artifactsDir` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:636135-636140](../../../../../../reference/runtime/host-main.cjs#L636135-L636140) | 2 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:424191-424196](../../../../../../reference/runtime/sand-eval-runner.cjs#L424191-L424196) | 2 | 0 | 0 | 2 | 0 | 0 |

### host:636135

Calls written directly in this body: `artifactsDir.endsWith`, `artifactsDir.includes`.

SHA-256 of the source span: `7de6f183a552695f4ba7441c723dfd981a27b9a9f1d618893225f1694e63784b`.

### evaluation:424191

Calls written directly in this body: `artifactsDir.endsWith`, `artifactsDir.includes`.

SHA-256 of the source span: `7de6f183a552695f4ba7441c723dfd981a27b9a9f1d618893225f1694e63784b`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
