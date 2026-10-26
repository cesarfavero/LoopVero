# `contentForHash`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/prompts/README.en.md).

**Module:** `core/runner/prompt-prefix-observation.ts` · [Module README](../../../../../modules/core/runner/prompt-prefix-observation-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:546373-546402](../../../../../../reference/runtime/sand-eval-runner.cjs#L546373-L546402) | `FunctionDeclaration` | no | `role, content` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:546373-546402](../../../../../../reference/runtime/sand-eval-runner.cjs#L546373-L546402) | 13 | 1 | 0 | 3 | 0 | 0 |

### evaluation:546373

Calls written directly in this body: `Array.isArray`, `String`, `isUnknownRecord2`, `parts.join`, `parts.push`, `stableJson`.

SHA-256 of the source span: `034e4a4552f1a08d7a6c12d8eece0bec1d665cacc1fcdb1df955152df65fa79e`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
