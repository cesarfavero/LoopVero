# `createTurnSetupLaps`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/turn-latency/turn-setup-laps.ts` · [Module README](../../../../../../modules/core/runner/turn-latency/turn-setup-laps-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:591238-591262](../../../../../../../reference/runtime/sand-eval-runner.cjs#L591238-L591262) | `FunctionDeclaration` | no | `args` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:591238-591262](../../../../../../../reference/runtime/sand-eval-runner.cjs#L591238-L591262) | 0 | 0 | 0 | 1 | 0 | 0 |

### evaluation:591238

Calls written directly in this body: `createTurnLapTimer`.

SHA-256 of the source span: `1b3a211b7302e08edb10aea3b7464d0dfe71af28125b95a74d503f26d79d21cd`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
