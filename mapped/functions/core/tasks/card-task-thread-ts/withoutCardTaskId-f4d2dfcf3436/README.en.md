# `withoutCardTaskId`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/tasks/README.en.md).

**Module:** `core/tasks/card-task-thread.ts` · [Module README](../../../../../modules/core/tasks/card-task-thread-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:725409-725412](../../../../../../reference/runtime/host-main.cjs#L725409-L725412) | `FunctionDeclaration` | no | `schema3` |
| [evaluation:524666-524669](../../../../../../reference/runtime/sand-eval-runner.cjs#L524666-L524669) | `FunctionDeclaration` | no | `schema3` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:725409-725412](../../../../../../reference/runtime/host-main.cjs#L725409-L725412) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:524666-524669](../../../../../../reference/runtime/sand-eval-runner.cjs#L524666-L524669) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:725409

Calls written directly in this body: `new external_exports2.ZodObject`.

SHA-256 of the source span: `952e659bb7015a16b0de1eeef1751a887f970a8b7651b1058a7beca8f08fe51a`.

### evaluation:524666

Calls written directly in this body: `new external_exports3.ZodObject`.

SHA-256 of the source span: `5e82d35277c0f8d568444b12931ba9d53cf990223b41a931a4ad59e9838e9005`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
