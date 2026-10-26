# `clipMiddle`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/subagents/README.en.md).

**Module:** `core/runner/subagents/executor-fork.ts` · [Module README](../../../../../../modules/core/runner/subagents/executor-fork-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:587569-587577](../../../../../../../reference/runtime/sand-eval-runner.cjs#L587569-L587577) | `FunctionDeclaration` | no | `text3, maxChars` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:587569-587577](../../../../../../../reference/runtime/sand-eval-runner.cjs#L587569-L587577) | 1 | 0 | 0 | 2 | 0 | 0 |

### evaluation:587569

Calls written directly in this body: `Math.ceil`, `text3.slice`.

SHA-256 of the source span: `3f05b5b1423808bc57ab04a9db7a4711ed3f2567dc249134e26efce34bc90010`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
