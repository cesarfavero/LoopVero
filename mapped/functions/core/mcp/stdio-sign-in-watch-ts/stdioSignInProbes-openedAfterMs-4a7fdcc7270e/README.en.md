# `stdioSignInProbes/openedAfterMs`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/integrations/README.en.md).

**Module:** `core/mcp/stdio-sign-in-watch.ts` · [Module README](../../../../../modules/core/mcp/stdio-sign-in-watch-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:579630-579635](../../../../../../reference/runtime/sand-eval-runner.cjs#L579630-L579635) | `FunctionExpression` | no | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:579630-579635](../../../../../../reference/runtime/sand-eval-runner.cjs#L579630-L579635) | 2 | 0 | 0 | 2 | 0 | 0 |

### evaluation:579630

Calls written directly in this body: `now`, `stdioSignInDeadlineMs`.

SHA-256 of the source span: `e396815ed052976eeaf9c1ecd7d2c2b2167c582d4314bae50a0532598c29ed9c`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
