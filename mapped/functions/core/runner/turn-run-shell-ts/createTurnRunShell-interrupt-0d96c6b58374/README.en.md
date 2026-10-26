# `createTurnRunShell/interrupt`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/turn-run-shell.ts` · [Module README](../../../../../modules/core/runner/turn-run-shell-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:591341-591359](../../../../../../reference/runtime/sand-eval-runner.cjs#L591341-L591359) | `FunctionDeclaration` | no | `reason, supersede` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:591341-591359](../../../../../../reference/runtime/sand-eval-runner.cjs#L591341-L591359) | 4 | 0 | 0 | 2 | 0 | 0 |

### evaluation:591341

Calls written directly in this body: `cancelActiveRun`, `clearActiveRunStopRequest`, `host.setActiveRunInterrupted`, `markActiveRunInterrupted`, `markActiveRunSupersededByUser`, `new SandRunAbortError`.

Assignment or increment targets: `unfinishedTasksReminderPending`.

SHA-256 of the source span: `d6c0a3f09c2895d39672e3aebdc821cb802fc0ed1bdf1ee38386e2af503a444a`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
