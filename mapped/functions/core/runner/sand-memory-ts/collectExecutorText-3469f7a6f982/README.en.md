# `collectExecutorText`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/memory/README.en.md).

**Module:** `core/runner/sand-memory.ts` · [Module README](../../../../../modules/core/runner/sand-memory-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:536332-536343](../../../../../../reference/runtime/sand-eval-runner.cjs#L536332-L536343) | `FunctionDeclaration` | yes | `executor, ctx` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:536332-536343](../../../../../../reference/runtime/sand-eval-runner.cjs#L536332-L536343) | 3 | 1 | 0 | 1 | 1 | 0 |

### evaluation:536332

Calls written directly in this body: `String`, `executor.stream`, `new Error`.

Assignment or increment targets: `text3`.

Explicit throw targets: `ConditionalExpression`.

SHA-256 of the source span: `c033e829fa7c185ecd426f1167136231528f113896cda115b8a8e2aa153f2811`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
