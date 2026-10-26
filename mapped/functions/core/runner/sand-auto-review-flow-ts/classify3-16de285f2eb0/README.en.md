# `classify3`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/approvals/README.en.md).

**Module:** `core/runner/sand-auto-review-flow.ts` · [Module README](../../../../../modules/core/runner/sand-auto-review-flow-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:762086-762104](../../../../../../reference/runtime/host-main.cjs#L762086-L762104) | `FunctionDeclaration` | no | `args, mode` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:762086-762104](../../../../../../reference/runtime/host-main.cjs#L762086-L762104) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:762086

Calls written directly in this body: `runSandAutoReviewClassifier`.

SHA-256 of the source span: `2a6c42638ce546f547d76d48ee873815b976b1bf109717fa1726a3b58f571f53`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
