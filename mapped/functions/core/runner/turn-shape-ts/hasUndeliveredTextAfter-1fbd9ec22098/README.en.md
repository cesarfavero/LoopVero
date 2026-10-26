# `hasUndeliveredTextAfter`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/turn-shape.ts` · [Module README](../../../../../modules/core/runner/turn-shape-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:587208-587212](../../../../../../reference/runtime/sand-eval-runner.cjs#L587208-L587212) | `FunctionDeclaration` | no | `messages, index` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:587208-587212](../../../../../../reference/runtime/sand-eval-runner.cjs#L587208-L587212) | 0 | 0 | 0 | 1 | 0 | 0 |

### evaluation:587208

Calls written directly in this body: `.some`, `messages.slice`.

SHA-256 of the source span: `4ee483e24c3b955d185e2328d1e0bdabf2b869a18d94d97b3e9a942c1ea6f8e7`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
