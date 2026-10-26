# `toToolChangeLabels`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/prompts/README.en.md).

**Module:** `core/runner/prompt-prefix-observation.ts` · [Module README](../../../../../modules/core/runner/prompt-prefix-observation-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:546338-546343](../../../../../../reference/runtime/sand-eval-runner.cjs#L546338-L546343) | `FunctionDeclaration` | no | `change` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:546338-546343](../../../../../../reference/runtime/sand-eval-runner.cjs#L546338-L546343) | 3 | 0 | 0 | 4 | 0 | 0 |

### evaluation:546338

Calls written directly in this body: `boundedToolName`, `change.slice`, `change.startsWith`.

SHA-256 of the source span: `5475113276dc20a84114bc93f1dd3b29a73a707d9361595064db1a135f6cfd63`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
