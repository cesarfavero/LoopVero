# `hostOfVariant`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/prompts/README.en.md).

**Module:** `core/frozen-prompts/frozen-prompt.ts` · [Module README](../../../../../modules/core/frozen-prompts/frozen-prompt-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:537316-537322](../../../../../../reference/runtime/sand-eval-runner.cjs#L537316-L537322) | `FunctionDeclaration` | no | `frozenPromptId, variant` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:537316-537322](../../../../../../reference/runtime/sand-eval-runner.cjs#L537316-L537322) | 1 | 0 | 0 | 1 | 1 | 0 |

### evaluation:537316

Calls written directly in this body: `new Error`.

Explicit throw targets: `Error`.

SHA-256 of the source span: `3051f6d54cd4109c5bd5b63a09b77d3ffa88f7423ffd4c675197643233b22dea`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
