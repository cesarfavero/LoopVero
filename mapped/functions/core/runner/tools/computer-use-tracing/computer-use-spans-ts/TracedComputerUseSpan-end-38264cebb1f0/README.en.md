# `TracedComputerUseSpan.end`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/browser-computer/README.en.md).

**Module:** `core/runner/tools/computer-use-tracing/computer-use-spans.ts` · [Module README](../../../../../../../modules/core/runner/tools/computer-use-tracing/computer-use-spans-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:743012-743017](../../../../../../../../reference/runtime/host-main.cjs#L743012-L743017) | `method` | no | `outcome` |
| [evaluation:515863-515868](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L515863-L515868) | `method` | no | `outcome` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:743012-743017](../../../../../../../../reference/runtime/host-main.cjs#L743012-L743017) | 1 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:515863-515868](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L515863-L515868) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:743012

Calls written directly in this body: `endSpan`, `this.ctx.signal.removeEventListener`.

Assignment or increment targets: `this.ended`.

SHA-256 of the source span: `71d26d2b7ec2b1402e8e5d549f4ec56fb64d5a591e01d506b770d44daf98f845`.

### evaluation:515863

Calls written directly in this body: `endSpan`, `this.ctx.signal.removeEventListener`.

Assignment or increment targets: `this.ended`.

SHA-256 of the source span: `71d26d2b7ec2b1402e8e5d549f4ec56fb64d5a591e01d506b770d44daf98f845`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).
