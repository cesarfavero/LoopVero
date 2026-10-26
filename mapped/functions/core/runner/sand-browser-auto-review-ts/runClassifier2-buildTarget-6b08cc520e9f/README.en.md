# `runClassifier2/buildTarget`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/approvals/README.en.md).

**Module:** `core/runner/sand-browser-auto-review.ts` · [Module README](../../../../../modules/core/runner/sand-browser-auto-review-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:699839-699844](../../../../../../reference/runtime/host-main.cjs#L699839-L699844) | `ArrowFunctionExpression` | no | `(none)` |
| [evaluation:513595-513600](../../../../../../reference/runtime/sand-eval-runner.cjs#L513595-L513600) | `ArrowFunctionExpression` | no | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:699839-699844](../../../../../../reference/runtime/host-main.cjs#L699839-L699844) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at host:699839 uses an implicit arrow-function return.
| [evaluation:513595-513600](../../../../../../reference/runtime/sand-eval-runner.cjs#L513595-L513600) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at evaluation:513595 uses an implicit arrow-function return.

### host:699839

Calls written directly in this body: `buildSandBrowserClassifierRiskTarget`.

SHA-256 of the source span: `ab0db9a754e238c080e996ab6c63e852e0baa64684bd59172367adc25adcb48a`.

### evaluation:513595

Calls written directly in this body: `buildSandBrowserClassifierRiskTarget`.

SHA-256 of the source span: `ab0db9a754e238c080e996ab6c63e852e0baa64684bd59172367adc25adcb48a`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
