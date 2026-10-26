# `bucketClockSkewDeltaMs`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/clock-skew-guard.ts` · [Module README](../../../../../modules/core/runner/clock-skew-guard-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:588549-588563](../../../../../../reference/runtime/sand-eval-runner.cjs#L588549-L588563) | `FunctionDeclaration` | no | `rawDeltaMs` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:588549-588563](../../../../../../reference/runtime/sand-eval-runner.cjs#L588549-L588563) | 7 | 0 | 0 | 8 | 0 | 0 |

### evaluation:588549

Calls written directly in this body: `Number.isFinite`.

SHA-256 of the source span: `f9c3e16d5abe57f3abf5655d6c1bba5c50a275701274dec57ece92c0ff648544`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
