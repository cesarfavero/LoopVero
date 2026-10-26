# `resolveSandStreamTuning`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/stream-tuning.ts` · [Module README](../../../../../modules/core/runner/stream-tuning-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:494049-494068](../../../../../../reference/runtime/host-main.cjs#L494049-L494068) | `FunctionDeclaration` | no | `env, base = SAND_DEFAULT_STREAM_TUNING` |
| [evaluation:596975-596994](../../../../../../reference/runtime/sand-eval-runner.cjs#L596975-L596994) | `FunctionDeclaration` | no | `env, base = SAND_DEFAULT_STREAM_TUNING` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:494049-494068](../../../../../../reference/runtime/host-main.cjs#L494049-L494068) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:596975-596994](../../../../../../reference/runtime/sand-eval-runner.cjs#L596975-L596994) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:494049

Calls written directly in this body: `readIntEnv`.

SHA-256 of the source span: `7128b497553c21dc8b56775a00f9475ea3a79690a1727001f8c283fcbb1587e9`.

### evaluation:596975

Calls written directly in this body: `readIntEnv`.

SHA-256 of the source span: `7128b497553c21dc8b56775a00f9475ea3a79690a1727001f8c283fcbb1587e9`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
