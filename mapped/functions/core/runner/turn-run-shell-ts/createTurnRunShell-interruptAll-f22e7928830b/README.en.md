# `createTurnRunShell/interruptAll`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/turn-run-shell.ts` · [Module README](../../../../../modules/core/runner/turn-run-shell-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:591369-591375](../../../../../../reference/runtime/sand-eval-runner.cjs#L591369-L591375) | `FunctionDeclaration` | no | `reason` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:591369-591375](../../../../../../reference/runtime/sand-eval-runner.cjs#L591369-L591375) | 0 | 1 | 0 | 1 | 0 | 0 |

### evaluation:591369

Calls written directly in this body: `host.subagents.abortSubagent`, `host.subagents.sessions.keys`, `interrupt`.

SHA-256 of the source span: `3f5d60596d8f3a4c6b6090c7d0adafeaa048bce559f0ea6f78be9e8d9d2a7022`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
