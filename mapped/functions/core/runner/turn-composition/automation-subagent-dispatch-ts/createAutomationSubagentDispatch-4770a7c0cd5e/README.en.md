# `createAutomationSubagentDispatch`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/automations/README.en.md).

**Module:** `core/runner/turn-composition/automation-subagent-dispatch.ts` · [Module README](../../../../../../modules/core/runner/turn-composition/automation-subagent-dispatch-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:584012-584122](../../../../../../../reference/runtime/sand-eval-runner.cjs#L584012-L584122) | `FunctionDeclaration` | no | `host, createSubagentRunner` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:584012-584122](../../../../../../../reference/runtime/sand-eval-runner.cjs#L584012-L584122) | 0 | 0 | 0 | 1 | 0 | 0 |

### evaluation:584012

Calls written directly in this body: `new Map`.

SHA-256 of the source span: `0e834d51fdcee26b2ca598583c0d5ad9e7891bf825434a03b9338401893b3aaf`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
