# `createSandMultitaskTodoTool`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/components/tasks/README.en.md).

**Module:** `core/sand-multitask.ts` · [Module README](../../../../modules/core/sand-multitask-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:752234-752246](../../../../../reference/runtime/host-main.cjs#L752234-L752246) | `FunctionDeclaration` | no | `resourceAccessor, stateHandler, reminders` |
| [evaluation:530290-530302](../../../../../reference/runtime/sand-eval-runner.cjs#L530290-L530302) | `FunctionDeclaration` | no | `resourceAccessor, stateHandler, reminders` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:752234-752246](../../../../../reference/runtime/host-main.cjs#L752234-L752246) | 1 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:530290-530302](../../../../../reference/runtime/sand-eval-runner.cjs#L530290-L530302) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:752234

Calls written directly in this body: `allowsSystemReminder`, `createUpdateTodosTool`.

SHA-256 of the source span: `9a7ceb141a0df611beaf040943f6b5eb2238348025219b63e813bc68ce045b31`.

### evaluation:530290

Calls written directly in this body: `allowsSystemReminder`, `createUpdateTodosTool`.

SHA-256 of the source span: `9a7ceb141a0df611beaf040943f6b5eb2238348025219b63e813bc68ce045b31`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
