# `diffPromptPrefixTools`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/prompts/README.en.md).

**Module:** `core/runner/prompt-prefix-observation.ts` · [Module README](../../../../../modules/core/runner/prompt-prefix-observation-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:546303-546324](../../../../../../reference/runtime/sand-eval-runner.cjs#L546303-L546324) | `FunctionDeclaration` | no | `previous, current2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:546303-546324](../../../../../../reference/runtime/sand-eval-runner.cjs#L546303-L546324) | 6 | 2 | 0 | 2 | 0 | 0 |

### evaluation:546303

Calls written directly in this body: `changed.push`, `new Map`, `new Set`, `previous.tools.every`, `previous.tools.map`, `previousByName.get`, `seen.add`, `seen.has`.

SHA-256 of the source span: `ffb7d9e15cca2b8d9909d14d54571a7693fcfa6574aa1f46d4c56e0e23e85f16`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
