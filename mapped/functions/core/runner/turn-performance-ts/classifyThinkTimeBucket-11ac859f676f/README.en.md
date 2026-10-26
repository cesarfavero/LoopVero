# `classifyThinkTimeBucket`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/turn-performance.ts` · [Module README](../../../../../modules/core/runner/turn-performance-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:546996-547003](../../../../../../reference/runtime/sand-eval-runner.cjs#L546996-L547003) | `FunctionDeclaration` | no | `thinkTimeMs` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:546996-547003](../../../../../../reference/runtime/sand-eval-runner.cjs#L546996-L547003) | 5 | 0 | 0 | 6 | 0 | 0 |

### evaluation:546996

Calls written directly in this body: `Number.isFinite`.

SHA-256 of the source span: `38ea8d2190f6dab630edb87dc0252f55f1f2c1dbefc709bd99d5851174661e01`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
