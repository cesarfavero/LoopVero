# `runSandAutoReviewFlow/cancelled`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/approvals/README.en.md).

**Module:** `core/runner/sand-auto-review-flow.ts` · [Module README](../../../../../modules/core/runner/sand-auto-review-flow-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:762124-762129](../../../../../../reference/runtime/host-main.cjs#L762124-L762129) | `ArrowFunctionExpression` | no | `(none)` |
| [evaluation:554734-554739](../../../../../../reference/runtime/sand-eval-runner.cjs#L554734-L554739) | `ArrowFunctionExpression` | no | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:762124-762129](../../../../../../reference/runtime/host-main.cjs#L762124-L762129) | 1 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:554734-554739](../../../../../../reference/runtime/sand-eval-runner.cjs#L554734-L554739) | 1 | 0 | 0 | 2 | 0 | 0 |

### host:762124

Calls written directly in this body: `recordRuleRefusalTheToolReportsAsText`.

SHA-256 of the source span: `32403fc8c40aebe3a37b4681ac5230436559a3b9dfe55e6e41e6da8b1d22d539`.

### evaluation:554734

Calls written directly in this body: `recordRuleRefusalTheToolReportsAsText`.

SHA-256 of the source span: `32403fc8c40aebe3a37b4681ac5230436559a3b9dfe55e6e41e6da8b1d22d539`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
