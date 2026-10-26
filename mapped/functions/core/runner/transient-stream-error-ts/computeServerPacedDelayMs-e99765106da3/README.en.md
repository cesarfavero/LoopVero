# `computeServerPacedDelayMs`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/transient-stream-error.ts` · [Module README](../../../../../modules/core/runner/transient-stream-error-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:590087-590091](../../../../../../reference/runtime/sand-eval-runner.cjs#L590087-L590091) | `FunctionDeclaration` | no | `params` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:590087-590091](../../../../../../reference/runtime/sand-eval-runner.cjs#L590087-L590091) | 0 | 0 | 0 | 1 | 0 | 0 |

### evaluation:590087

Calls written directly in this body: `Math.min`, `Math.round`, `random2`.

SHA-256 of the source span: `b005c9a8fa9c944ea1a0bbc3f5489d6163c7f65eab67956a1098c169300e73e7`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
