# `mintTraceparent`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `shared/observability/send-trace.ts` · [Module README](../../../../../modules/shared/observability/send-trace-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:528684-528693](../../../../../../reference/runtime/sand-eval-runner.cjs#L528684-L528693) | `FunctionDeclaration` | no | `sampled = true` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:528684-528693](../../../../../../reference/runtime/sand-eval-runner.cjs#L528684-L528693) | 1 | 0 | 0 | 2 | 0 | 1 |

### evaluation:528684

Calls written directly in this body: `randomHex`.

SHA-256 of the source span: `a865dfc79b73d51c086c0303ab6fa3f9645568609194d872eb6107e3f65ff6f6`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
