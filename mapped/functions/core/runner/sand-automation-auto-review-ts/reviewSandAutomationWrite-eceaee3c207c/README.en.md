# `reviewSandAutomationWrite`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/automations/README.en.md).

**Module:** `core/runner/sand-automation-auto-review.ts` · [Module README](../../../../../modules/core/runner/sand-automation-auto-review-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:762279-762281](../../../../../../reference/runtime/host-main.cjs#L762279-L762281) | `FunctionDeclaration` | yes | `args` |
| [evaluation:554889-554891](../../../../../../reference/runtime/sand-eval-runner.cjs#L554889-L554891) | `FunctionDeclaration` | yes | `args` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:762279-762281](../../../../../../reference/runtime/host-main.cjs#L762279-L762281) | 0 | 0 | 1 | 1 | 0 | 0 |
| [evaluation:554889-554891](../../../../../../reference/runtime/sand-eval-runner.cjs#L554889-L554891) | 0 | 0 | 1 | 1 | 0 | 0 |

### host:762279

Calls written directly in this body: `runSandAutoReviewFlow`.

SHA-256 of the source span: `db16319b0e05132552592d42ab32b9066892d07b17e9386f1a51720eec099455`.

### evaluation:554889

Calls written directly in this body: `runSandAutoReviewFlow`.

SHA-256 of the source span: `db16319b0e05132552592d42ab32b9066892d07b17e9386f1a51720eec099455`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
