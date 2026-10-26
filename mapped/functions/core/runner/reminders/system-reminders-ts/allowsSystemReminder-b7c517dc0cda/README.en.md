# `allowsSystemReminder`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/reminders/system-reminders.ts` · [Module README](../../../../../../modules/core/runner/reminders/system-reminders-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:725599-725601](../../../../../../../reference/runtime/host-main.cjs#L725599-L725601) | `FunctionDeclaration` | no | `host, id` |
| [evaluation:480329-480331](../../../../../../../reference/runtime/sand-eval-runner.cjs#L480329-L480331) | `FunctionDeclaration` | no | `host, id` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:725599-725601](../../../../../../../reference/runtime/host-main.cjs#L725599-L725601) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:480329-480331](../../../../../../../reference/runtime/sand-eval-runner.cjs#L480329-L480331) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:725599

Calls written directly in this body: `host.systemReminders`.

SHA-256 of the source span: `e5e08a7ef2b56bfe3438f2b8bc643641efe224fde4e907207924c0dcb46a6f34`.

### evaluation:480329

Calls written directly in this body: `host.systemReminders`.

SHA-256 of the source span: `e5e08a7ef2b56bfe3438f2b8bc643641efe224fde4e907207924c0dcb46a6f34`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
