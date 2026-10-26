# `renderFrozenPromptSectionUpdates`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/prompts/README.en.md).

**Module:** `core/runner/frozen-prompt-section.ts` · [Module README](../../../../../modules/core/runner/frozen-prompt-section-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:530709-530718](../../../../../../reference/runtime/sand-eval-runner.cjs#L530709-L530718) | `FunctionDeclaration` | no | `updates` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:530709-530718](../../../../../../reference/runtime/sand-eval-runner.cjs#L530709-L530718) | 1 | 0 | 0 | 2 | 0 | 0 |

### evaluation:530709

Calls written directly in this body: `.join`, `CHANGED_LINES_SUFFIX.trim`, `updates.map`.

SHA-256 of the source span: `5201e77a14aa7e95e77bf899b6159fc0b70bd0c0639698e1602aa2ed16967515`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
