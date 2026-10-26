# `inertDraftText`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/wake-outcomes.ts` · [Module README](../../../../../modules/core/runner/wake-outcomes-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:725671-725673](../../../../../../reference/runtime/host-main.cjs#L725671-L725673) | `FunctionDeclaration` | no | `value` |
| [evaluation:538728-538730](../../../../../../reference/runtime/sand-eval-runner.cjs#L538728-L538730) | `FunctionDeclaration` | no | `value` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:725671-725673](../../../../../../reference/runtime/host-main.cjs#L725671-L725673) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:538728-538730](../../../../../../reference/runtime/sand-eval-runner.cjs#L538728-L538730) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:725671

Calls written directly in this body: `.replace`, `.trim`, `value.replace`.

SHA-256 of the source span: `5f780befb0b373b10ee0a9ab601b438b893aab83cb4f4929f0031014a564aa23`.

### evaluation:538728

Calls written directly in this body: `.replace`, `.trim`, `value.replace`.

SHA-256 of the source span: `5f780befb0b373b10ee0a9ab601b438b893aab83cb4f4929f0031014a564aa23`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
