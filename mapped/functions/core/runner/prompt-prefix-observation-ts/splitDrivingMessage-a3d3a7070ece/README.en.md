# `splitDrivingMessage`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/prompts/README.en.md).

**Module:** `core/runner/prompt-prefix-observation.ts` · [Module README](../../../../../modules/core/runner/prompt-prefix-observation-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:546407-546418](../../../../../../reference/runtime/sand-eval-runner.cjs#L546407-L546418) | `FunctionDeclaration` | no | `message` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:546407-546418](../../../../../../reference/runtime/sand-eval-runner.cjs#L546407-L546418) | 5 | 0 | 0 | 3 | 0 | 0 |

### evaluation:546407

Calls written directly in this body: `Array.isArray`, `content.findIndex`, `content.slice`, `contentForHash`, `partText`.

SHA-256 of the source span: `90a49708fe7e4e3c593b6d48ab7b5d8b8a68144748fd3a67f24965a51753e547`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
