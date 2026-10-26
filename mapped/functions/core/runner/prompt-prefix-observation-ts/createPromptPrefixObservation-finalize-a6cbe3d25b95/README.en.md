# `createPromptPrefixObservation/finalize`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/prompts/README.en.md).

**Module:** `core/runner/prompt-prefix-observation.ts` · [Module README](../../../../../modules/core/runner/prompt-prefix-observation-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:546837-546840](../../../../../../reference/runtime/sand-eval-runner.cjs#L546837-L546840) | `ArrowFunctionExpression` | no | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:546837-546840](../../../../../../reference/runtime/sand-eval-runner.cjs#L546837-L546840) | 1 | 0 | 0 | 0 | 0 | 0 |

### evaluation:546837

Calls written directly in this body: `deps.snapshots.setPromptPrefixSnapshot`, `settlePending`.

SHA-256 of the source span: `4fa763aef1678d22c117f9d7c2b1c579ac415078e0a952126a85fc64c91447f7`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
