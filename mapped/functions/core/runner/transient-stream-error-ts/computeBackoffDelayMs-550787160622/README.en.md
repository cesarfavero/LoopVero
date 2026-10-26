# `computeBackoffDelayMs`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/transient-stream-error.ts` · [Module README](../../../../../modules/core/runner/transient-stream-error-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:590074-590081](../../../../../../reference/runtime/sand-eval-runner.cjs#L590074-L590081) | `FunctionDeclaration` | no | `params` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:590074-590081](../../../../../../reference/runtime/sand-eval-runner.cjs#L590074-L590081) | 0 | 0 | 0 | 1 | 0 | 0 |

### evaluation:590074

Calls written directly in this body: `Math.max`, `Math.min`, `Math.round`, `random2`.

SHA-256 of the source span: `670c8d282606c5658619d58b508c384a57f3c5c949610a385cd3723561334ab7`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
