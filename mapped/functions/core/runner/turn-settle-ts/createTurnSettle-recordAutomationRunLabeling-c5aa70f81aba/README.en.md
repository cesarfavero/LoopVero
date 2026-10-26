# `createTurnSettle/recordAutomationRunLabeling`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/turn-settle.ts` · [Module README](../../../../../modules/core/runner/turn-settle-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:591035-591058](../../../../../../reference/runtime/sand-eval-runner.cjs#L591035-L591058) | `ArrowFunctionExpression` | no | `args` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:591035-591058](../../../../../../reference/runtime/sand-eval-runner.cjs#L591035-L591058) | 3 | 0 | 0 | 3 | 0 | 1 |

### evaluation:591035

Calls written directly in this body: `errorLogTag`, `host.latestPromptMessages`, `labelingIdentity`, `record4`, `reportHostDiagnostic`.

SHA-256 of the source span: `8ed457bbe4ce9079b7d2057cc53716c9af49fdf446698dbb615cb02d955b2b14`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
