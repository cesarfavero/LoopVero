# `isSandWaitToolCall`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/loop-detection-policy.ts` · [Module README](../../../../../modules/core/runner/loop-detection-policy-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:483297-483307](../../../../../../reference/runtime/sand-eval-runner.cjs#L483297-L483307) | `FunctionDeclaration` | no | `toolName, args` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:483297-483307](../../../../../../reference/runtime/sand-eval-runner.cjs#L483297-L483307) | 5 | 0 | 0 | 5 | 0 | 0 |

### evaluation:483297

Calls written directly in this body: `SHELL_SLEEP_PATTERN.test`, `isWaitComputerAction`, `resolveEffectiveToolCall`.

SHA-256 of the source span: `6768089ce5778f866328fbb05a71b6c82a6034a650184a0624ee3d1f6d2ee81e`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
