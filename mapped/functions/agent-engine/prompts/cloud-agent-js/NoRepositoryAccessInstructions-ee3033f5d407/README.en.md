# `NoRepositoryAccessInstructions`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/prompts/README.en.md).

**Module:** `agent-engine/prompts/cloud-agent.js` · [Module README](../../../../../modules/agent-engine/prompts/cloud-agent-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:636207-636217](../../../../../../reference/runtime/host-main.cjs#L636207-L636217) | `FunctionDeclaration` | no | `{ repolessPromptVariant }` |
| [evaluation:424263-424273](../../../../../../reference/runtime/sand-eval-runner.cjs#L424263-L424273) | `FunctionDeclaration` | no | `{ repolessPromptVariant }` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:636207-636217](../../../../../../reference/runtime/host-main.cjs#L636207-L636217) | 1 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:424263-424273](../../../../../../reference/runtime/sand-eval-runner.cjs#L424263-L424273) | 1 | 0 | 0 | 2 | 0 | 0 |

### host:636207

Calls written directly in this body: `jsx`, `repolessGuidanceBullets`.

SHA-256 of the source span: `7269f7560be76139982cd334dbac927ceb1e142a642feef330535ebbbcdba5f9`.

### evaluation:424263

Calls written directly in this body: `jsx`, `repolessGuidanceBullets`.

SHA-256 of the source span: `7269f7560be76139982cd334dbac927ceb1e142a642feef330535ebbbcdba5f9`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
