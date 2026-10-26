# `createTurnSettle/recordFollowupLabeling`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/turn-settle.ts` · [Module README](../../../../../modules/core/runner/turn-settle-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:590886-590899](../../../../../../reference/runtime/sand-eval-runner.cjs#L590886-L590899) | `ArrowFunctionExpression` | no | `labeling` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:590886-590899](../../../../../../reference/runtime/sand-eval-runner.cjs#L590886-L590899) | 1 | 0 | 0 | 1 | 0 | 1 |

### evaluation:590886

Calls written directly in this body: `errorLogTag`, `host.recordFollowupLabeling`, `reportHostDiagnostic`.

SHA-256 of the source span: `43be2d23ff97b7c208ddbb564f7f39eacae324863fed6e9af5323e0c1e2082f1`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
