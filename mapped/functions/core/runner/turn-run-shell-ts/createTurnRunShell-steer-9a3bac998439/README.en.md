# `createTurnRunShell/steer`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/turn-run-shell.ts` · [Module README](../../../../../modules/core/runner/turn-run-shell-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:591337-591340](../../../../../../reference/runtime/sand-eval-runner.cjs#L591337-L591340) | `FunctionDeclaration` | no | `prompt, options2 = {}` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:591337-591340](../../../../../../reference/runtime/sand-eval-runner.cjs#L591337-L591340) | 1 | 0 | 0 | 2 | 0 | 0 |

### evaluation:591337

Calls written directly in this body: `steerInbox.enqueue`.

SHA-256 of the source span: `cc8b98983def0d0b08242173fdf668a4510675a50b82be15a6c1ee828c79b6df`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
