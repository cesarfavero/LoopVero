# `withRewrittenText`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/large-output-spill.ts` · [Module README](../../../../../modules/core/runner/large-output-spill-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:515720-515730](../../../../../../reference/runtime/sand-eval-runner.cjs#L515720-L515730) | `FunctionDeclaration` | no | `ctx, result` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:515720-515730](../../../../../../reference/runtime/sand-eval-runner.cjs#L515720-L515730) | 4 | 0 | 0 | 3 | 0 | 0 |

### evaluation:515720

Calls written directly in this body: `ctx.get`, `result.clone`, `rewriteMcpSuccessText`, `rewriteMcpText`.

Assignment or increment targets: `rewritten.result`.

SHA-256 of the source span: `aa3a799154ab439b240761b4ae87fd12c3fcc0977bba6fafd3f09addb892a1b7`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
