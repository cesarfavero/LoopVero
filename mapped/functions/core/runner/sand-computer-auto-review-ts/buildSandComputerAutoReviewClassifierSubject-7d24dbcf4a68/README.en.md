# `buildSandComputerAutoReviewClassifierSubject`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/approvals/README.en.md).

**Module:** `core/runner/sand-computer-auto-review.ts` · [Module README](../../../../../modules/core/runner/sand-computer-auto-review-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:699346-699352](../../../../../../reference/runtime/host-main.cjs#L699346-L699352) | `FunctionDeclaration` | no | `args` |
| [evaluation:513102-513108](../../../../../../reference/runtime/sand-eval-runner.cjs#L513102-L513108) | `FunctionDeclaration` | no | `args` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:699346-699352](../../../../../../reference/runtime/host-main.cjs#L699346-L699352) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:513102-513108](../../../../../../reference/runtime/sand-eval-runner.cjs#L513102-L513108) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:699346

Calls written directly in this body: `normalizeSandComputerDescription`, `normalizeSandComputerExactActionArgs`.

SHA-256 of the source span: `0e7be6059a4297f3e52e0227e5f444fb02f20f896bdc25738d963a9dd8c24b0d`.

### evaluation:513102

Calls written directly in this body: `normalizeSandComputerDescription`, `normalizeSandComputerExactActionArgs`.

SHA-256 of the source span: `0e7be6059a4297f3e52e0227e5f444fb02f20f896bdc25738d963a9dd8c24b0d`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
