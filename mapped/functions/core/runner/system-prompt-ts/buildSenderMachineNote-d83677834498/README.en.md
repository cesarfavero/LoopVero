# `buildSenderMachineNote`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/prompts/README.en.md).

**Module:** `core/runner/system-prompt.ts` · [Module README](../../../../../modules/core/runner/system-prompt-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:532496-532499](../../../../../../reference/runtime/sand-eval-runner.cjs#L532496-L532499) | `FunctionDeclaration` | no | `senderMachineId` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:532496-532499](../../../../../../reference/runtime/sand-eval-runner.cjs#L532496-L532499) | 1 | 0 | 0 | 1 | 0 | 0 |

### evaluation:532496

Calls written directly in this body: `STRIPPABLE_SENDER_MACHINE_NOTE_ID_RE.test`, `senderMachineId.trim`.

SHA-256 of the source span: `9675578f2a95effbfa4be8bb75eb33b0dc94931fc0a311d4269cdf5c16754cc9`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
