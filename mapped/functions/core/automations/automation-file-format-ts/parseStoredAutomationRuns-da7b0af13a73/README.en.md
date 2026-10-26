# `parseStoredAutomationRuns`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/automations/README.en.md).

**Module:** `core/automations/automation-file-format.ts` · [Module README](../../../../../modules/core/automations/automation-file-format-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:716596-716611](../../../../../../reference/runtime/host-main.cjs#L716596-L716611) | `FunctionDeclaration` | no | `raw` |
| [evaluation:627310-627325](../../../../../../reference/runtime/sand-eval-runner.cjs#L627310-L627325) | `FunctionDeclaration` | no | `raw` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:716596-716611](../../../../../../reference/runtime/host-main.cjs#L716596-L716611) | 2 | 1 | 0 | 2 | 0 | 1 |
| [evaluation:627310-627325](../../../../../../reference/runtime/sand-eval-runner.cjs#L627310-L627325) | 2 | 1 | 0 | 2 | 0 | 1 |

### host:716596

Calls written directly in this body: `Array.isArray`, `JSON.parse`, `parseStoredAutomationRun`, `runs.push`, `runs.slice`, `runs.sort`.

Assignment or increment targets: `parsed2`.

SHA-256 of the source span: `ff67a4fed19e2c9de6ab17ea09524b28eafb1186debc78435386a3b6617cb4a0`.

### evaluation:627310

Calls written directly in this body: `Array.isArray`, `JSON.parse`, `parseStoredAutomationRun`, `runs.push`, `runs.slice`, `runs.sort`.

Assignment or increment targets: `parsed`.

SHA-256 of the source span: `29fc8c7220a9afa8eda38e1690238b725099ab7430f751c55f41e4c862a0977e`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
