# `withToolDecisions`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/action-audit/tool-decision-audit.ts` · [Module README](../../../../../../modules/core/runner/action-audit/tool-decision-audit-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:490023-490028](../../../../../../../reference/runtime/sand-eval-runner.cjs#L490023-L490028) | `FunctionDeclaration` | no | `executor, audit` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:490023-490028](../../../../../../../reference/runtime/sand-eval-runner.cjs#L490023-L490028) | 1 | 0 | 0 | 1 | 0 | 0 |

### evaluation:490023

Calls written directly in this body: `new DecisionRecordingClassifierExecutor`.

SHA-256 of the source span: `c10fcc97b814e999c3c8c3c5d95e100a5fb487c8c883dd8ab8e3bd50a4470e38`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
