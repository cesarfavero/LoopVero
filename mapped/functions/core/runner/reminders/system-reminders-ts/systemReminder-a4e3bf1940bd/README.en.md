# `systemReminder`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/reminders/system-reminders.ts` · [Module README](../../../../../../modules/core/runner/reminders/system-reminders-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:725592-725594](../../../../../../../reference/runtime/host-main.cjs#L725592-L725594) | `FunctionDeclaration` | no | `id, body` |
| [evaluation:480307-480309](../../../../../../../reference/runtime/sand-eval-runner.cjs#L480307-L480309) | `FunctionDeclaration` | no | `id, body` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:725592-725594](../../../../../../../reference/runtime/host-main.cjs#L725592-L725594) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:480307-480309](../../../../../../../reference/runtime/sand-eval-runner.cjs#L480307-L480309) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:725592

Calls written directly in this body: `wrap2`.

SHA-256 of the source span: `71cb25e899a85e3a75ed3dc7156ae97497f3ae0c19bdfb37c34e627925c75ae1`.

### evaluation:480307

Calls written directly in this body: `wrap2`.

SHA-256 of the source span: `71cb25e899a85e3a75ed3dc7156ae97497f3ae0c19bdfb37c34e627925c75ae1`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
