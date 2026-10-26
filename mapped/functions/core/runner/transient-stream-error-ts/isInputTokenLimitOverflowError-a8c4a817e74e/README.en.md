# `isInputTokenLimitOverflowError`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/transient-stream-error.ts` · [Module README](../../../../../modules/core/runner/transient-stream-error-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:736289-736292](../../../../../../reference/runtime/host-main.cjs#L736289-L736292) | `FunctionDeclaration` | no | `error64` |
| [evaluation:589981-589984](../../../../../../reference/runtime/sand-eval-runner.cjs#L589981-L589984) | `FunctionDeclaration` | no | `error63` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:736289-736292](../../../../../../reference/runtime/host-main.cjs#L736289-L736292) | 1 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:589981-589984](../../../../../../reference/runtime/sand-eval-runner.cjs#L589981-L589984) | 1 | 0 | 0 | 2 | 0 | 0 |

### host:736289

Calls written directly in this body: no calls identifiable by name.

SHA-256 of the source span: `9bb1b48d056dcbf8db8716bed7a0513d13ea1b5e26ea505de10588552cbeda6d`.

### evaluation:589981

Calls written directly in this body: no calls identifiable by name.

SHA-256 of the source span: `2a1eff18b966a001fc9919778b41b230c142b25420eb1649b60f46e1cdc615ab`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
