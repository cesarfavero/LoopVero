# `automationTriggerSchema`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/state-tools/trigger-schema.ts` · [Module README](../../../../../../../modules/core/runner/tools/state-tools/trigger-schema-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:762341-762472](../../../../../../../../reference/runtime/host-main.cjs#L762341-L762472) | `FunctionDeclaration` | no | `copy` |
| [evaluation:554951-555082](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L554951-L555082) | `FunctionDeclaration` | no | `copy` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:762341-762472](../../../../../../../../reference/runtime/host-main.cjs#L762341-L762472) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:554951-555082](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L554951-L555082) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:762341

Calls written directly in this body: `.describe`, `.int`, `.min`, `.optional`, `.positive`, `.superRefine`, `.trim`, `automationSchedule.describe`, `described`, `external_exports2.array`, `external_exports2.boolean`, `external_exports2.discriminatedUnion`, `external_exports2.enum`, `external_exports2.literal`, `external_exports2.number`, `external_exports2.object`, `external_exports2.preprocess`, `external_exports2.string`, `external_exports2.union`, `linearTriggerSchema`.

SHA-256 of the source span: `bacf26c25a3679ce8f88f6592134bc195b7fc60dcb067d80f93d2a62b1b87619`.

### evaluation:554951

Calls written directly in this body: `.describe`, `.int`, `.min`, `.optional`, `.positive`, `.superRefine`, `.trim`, `automationSchedule.describe`, `described`, `external_exports3.array`, `external_exports3.boolean`, `external_exports3.discriminatedUnion`, `external_exports3.enum`, `external_exports3.literal`, `external_exports3.number`, `external_exports3.object`, `external_exports3.preprocess`, `external_exports3.string`, `external_exports3.union`, `linearTriggerSchema`.

SHA-256 of the source span: `bbf37e6cba417de2dc1a0990d299fd820a847674c84c95d847fbcd77d98a2f6d`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).
