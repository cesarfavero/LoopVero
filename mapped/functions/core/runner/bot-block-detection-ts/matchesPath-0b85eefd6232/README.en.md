# `matchesPath`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/bot-block-detection.ts` · [Module README](../../../../../modules/core/runner/bot-block-detection-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:484423-484425](../../../../../../reference/runtime/sand-eval-runner.cjs#L484423-L484425) | `FunctionDeclaration` | no | `criteria, pathname` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:484423-484425](../../../../../../reference/runtime/sand-eval-runner.cjs#L484423-L484425) | 0 | 0 | 0 | 1 | 0 | 0 |

### evaluation:484423

Calls written directly in this body: `criteria.equals.includes`, `criteria.includes.some`, `criteria.prefix.some`.

SHA-256 of the source span: `215d44dda740c7de534eeeaf2a511675a9a8d7de66e601e0c206d737e6354f1e`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
