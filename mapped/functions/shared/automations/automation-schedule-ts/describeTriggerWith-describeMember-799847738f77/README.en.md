# `describeTriggerWith/describeMember`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/automations/README.en.md).

**Module:** `shared/automations/automation-schedule.ts` · [Module README](../../../../../modules/shared/automations/automation-schedule-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:682948-682948](../../../../../../reference/runtime/host-main.cjs#L682948-L682948) | `ArrowFunctionExpression` | no | `member` |
| [evaluation:527172-527172](../../../../../../reference/runtime/sand-eval-runner.cjs#L527172-L527172) | `ArrowFunctionExpression` | no | `member` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:682948-682948](../../../../../../reference/runtime/host-main.cjs#L682948-L682948) | 1 | 0 | 0 | 0 | 0 | 0 |

The occurrence at host:682948 uses an implicit arrow-function return.
| [evaluation:527172-527172](../../../../../../reference/runtime/sand-eval-runner.cjs#L527172-L527172) | 1 | 0 | 0 | 0 | 0 | 0 |

The occurrence at evaluation:527172 uses an implicit arrow-function return.

### host:682948

Calls written directly in this body: `describeCron`, `describeListener`.

SHA-256 of the source span: `c4e59b0497e31f844116e44fce009943f4df1291e05a5b7d7296f343975b6a90`.

### evaluation:527172

Calls written directly in this body: `describeCron`, `describeListener`.

SHA-256 of the source span: `c4e59b0497e31f844116e44fce009943f4df1291e05a5b7d7296f343975b6a90`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
