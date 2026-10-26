# `composeRunnerActionAudit`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/action-audit/runner-audit.ts` · [Module README](../../../../../../modules/core/runner/action-audit/runner-audit-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:490031-490054](../../../../../../../reference/runtime/sand-eval-runner.cjs#L490031-L490054) | `FunctionDeclaration` | no | `options2, initiatedBy, navigation` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:490031-490054](../../../../../../../reference/runtime/sand-eval-runner.cjs#L490031-L490054) | 3 | 0 | 0 | 1 | 0 | 0 |

### evaluation:490031

Calls written directly in this body: `createActionAuditSequencer`, `navigation`, `new ToolDecisionAudit`, `new ToolTargetLedger`, `withEventSequence`, `withInitiatedBy`, `withToolDecisions`.

SHA-256 of the source span: `db646bec9a9e4a239ddb7239d5fb9e7b58ff1b0b400a069d722120ef9262771a`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
