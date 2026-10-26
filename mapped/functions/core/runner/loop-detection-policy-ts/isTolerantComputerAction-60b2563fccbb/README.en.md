# `isTolerantComputerAction`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/loop-detection-policy.ts` · [Module README](../../../../../modules/core/runner/loop-detection-policy-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:483268-483277](../../../../../../reference/runtime/sand-eval-runner.cjs#L483268-L483277) | `FunctionDeclaration` | no | `value` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:483268-483277](../../../../../../reference/runtime/sand-eval-runner.cjs#L483268-L483277) | 5 | 0 | 0 | 4 | 0 | 0 |

### evaluation:483268

Calls written directly in this body: `Array.isArray`, `TOLERANT_COMPUTER_ACTIONS.has`, `then.every`.

SHA-256 of the source span: `2d51a54d70dcafc66b54bc5c4596d019da58076bd4a118b9258a2149eca8d995`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
