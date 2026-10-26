# `createActionAuditSequencer/next`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/action-audit.ts` · [Module README](../../../../../modules/core/runner/action-audit-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:484742-484753](../../../../../../reference/runtime/sand-eval-runner.cjs#L484742-L484753) | `FunctionExpression` | no | `turnId` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:484742-484753](../../../../../../reference/runtime/sand-eval-runner.cjs#L484742-L484753) | 2 | 0 | 0 | 1 | 0 | 0 |

### evaluation:484742

Calls written directly in this body: `.next`, `Math.max`, `nextByTurn.delete`, `nextByTurn.get`, `nextByTurn.keys`, `nextByTurn.set`.

Assignment or increment targets: `highWater`.

SHA-256 of the source span: `5ec26ec8fc77a4bdeb12285162d626a82a0c2738af76ee48eb45645a0a354cd6`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
