# `hashPromptPrefix`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/prompts/README.en.md).

**Module:** `core/runner/prompt-prefix-observation.ts` · [Module README](../../../../../modules/core/runner/prompt-prefix-observation-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:546470-546484](../../../../../../reference/runtime/sand-eval-runner.cjs#L546470-L546484) | `FunctionDeclaration` | no | `request3` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:546470-546484](../../../../../../reference/runtime/sand-eval-runner.cjs#L546470-L546484) | 5 | 0 | 0 | 1 | 0 | 0 |

### evaluation:546470

Calls written directly in this body: `.includes`, `.join`, `.map`, `dynamicToolNamesOf`, `messageText`, `request3.messages.find`, `sha256HexOfText`, `shaOfMessage`, `tools.map`.

SHA-256 of the source span: `88949a5720fbf7fbb0174bf9e5f093343a1e43e9461b66bd7a777fb1f91bc298`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
