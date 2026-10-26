# `_SandAgentRunner.constructor/imageGenerationConcurrencyLimiter`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/sand-agent-runner.ts` · [Module README](../../../../../modules/core/runner/sand-agent-runner-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:593451-593453](../../../../../../reference/runtime/sand-eval-runner.cjs#L593451-L593453) | `FunctionExpression` | no | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:593451-593453](../../../../../../reference/runtime/sand-eval-runner.cjs#L593451-L593453) | 0 | 0 | 0 | 1 | 0 | 0 |

### evaluation:593451

Calls written directly in this body: `self2.promptGlue.imageGenerationLimiter`.

SHA-256 of the source span: `3f22bfa20017612bd52a1cc1245c01b500465704f58b43edf889704b849039f1`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
