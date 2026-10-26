# `matchesTitle`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/bot-block-detection.ts` · [Module README](../../../../../modules/core/runner/bot-block-detection-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:484426-484428](../../../../../../reference/runtime/sand-eval-runner.cjs#L484426-L484428) | `FunctionDeclaration` | no | `criteria, title` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:484426-484428](../../../../../../reference/runtime/sand-eval-runner.cjs#L484426-L484428) | 0 | 0 | 0 | 1 | 0 | 0 |

### evaluation:484426

Calls written directly in this body: `criteria.equals.includes`, `criteria.startsWith.some`.

SHA-256 of the source span: `37751c506b5f3d1538b18305cea0bfdef1cb18dd95498b8f95213fadedefd78a`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
