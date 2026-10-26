# `createTeamConversionTool/execute`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/team/sand-team-conversion-tool.ts` · [Module README](../../../../../../../modules/core/runner/tools/team/sand-team-conversion-tool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:781604-781620](../../../../../../../../reference/runtime/host-main.cjs#L781604-L781620) | `ArrowFunctionExpression` | yes | `_ctx, args, d` |
| [evaluation:581951-581967](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L581951-L581967) | `ArrowFunctionExpression` | yes | `_ctx, args, d` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:781604-781620](../../../../../../../../reference/runtime/host-main.cjs#L781604-L781620) | 5 | 0 | 3 | 4 | 0 | 0 |
| [evaluation:581951-581967](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L581951-L581967) | 5 | 0 | 3 | 4 | 0 | 0 |

### host:781604

Calls written directly in this body: `d.activeTurnRequestSource`, `d.completeTurn`, `d.teamConversion.copy`, `d.teamConversion.preview`, `d.teamConversion.restart`, `describeCopy`, `describePreview`, `describeRestart`, `humanOnlyReviewLedger`, `ledger.ruleRefused`, `refusal2`.

SHA-256 of the source span: `ed151f291f54ea89436381d1e269867749321861e1e5725f23fefbbb6d748f93`.

### evaluation:581951

Calls written directly in this body: `d.activeTurnRequestSource`, `d.completeTurn`, `d.teamConversion.copy`, `d.teamConversion.preview`, `d.teamConversion.restart`, `describeCopy`, `describePreview`, `describeRestart`, `humanOnlyReviewLedger`, `ledger.ruleRefused`, `refusal2`.

SHA-256 of the source span: `ed151f291f54ea89436381d1e269867749321861e1e5725f23fefbbb6d748f93`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).
