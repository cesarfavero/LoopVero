# `describeClick`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/approvals/README.en.md).

**Module:** `core/runner/sand-computer-auto-review.ts` · [Module README](../../../../../modules/core/runner/sand-computer-auto-review-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:699454-699456](../../../../../../reference/runtime/host-main.cjs#L699454-L699456) | `FunctionDeclaration` | no | `exactAction` |
| [evaluation:513210-513212](../../../../../../reference/runtime/sand-eval-runner.cjs#L513210-L513212) | `FunctionDeclaration` | no | `exactAction` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:699454-699456](../../../../../../reference/runtime/host-main.cjs#L699454-L699456) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:513210-513212](../../../../../../reference/runtime/sand-eval-runner.cjs#L513210-L513212) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:699454

Calls written directly in this body: `describeHeldGesture`, `pointText`.

SHA-256 of the source span: `ddd9bfd4010d92aa3c8cda6447d7688233f5e4f2c34eb854d957cb202bd1f08e`.

### evaluation:513210

Calls written directly in this body: `describeHeldGesture`, `pointText`.

SHA-256 of the source span: `ddd9bfd4010d92aa3c8cda6447d7688233f5e4f2c34eb854d957cb202bd1f08e`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
