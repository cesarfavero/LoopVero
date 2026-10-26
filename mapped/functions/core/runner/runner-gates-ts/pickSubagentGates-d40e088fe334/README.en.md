# `pickSubagentGates`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/runner-gates.ts` · [Module README](../../../../../modules/core/runner/runner-gates-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:531069-531078](../../../../../../reference/runtime/sand-eval-runner.cjs#L531069-L531078) | `FunctionDeclaration` | no | `parent` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:531069-531078](../../../../../../reference/runtime/sand-eval-runner.cjs#L531069-L531078) | 0 | 0 | 0 | 1 | 0 | 0 |

### evaluation:531069

Calls written directly in this body: `composeSandRunnerGates`, `forEveryGate`.

SHA-256 of the source span: `2a9417b84a237caa139d07801df7eac7d4f51d468141a0bdf6bd1c77bee24be9`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
