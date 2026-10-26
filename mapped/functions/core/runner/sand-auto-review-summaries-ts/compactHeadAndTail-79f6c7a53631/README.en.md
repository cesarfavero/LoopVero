# `compactHeadAndTail`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/approvals/README.en.md).

**Module:** `core/runner/sand-auto-review-summaries.ts` · [Module README](../../../../../modules/core/runner/sand-auto-review-summaries-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:693733-693749](../../../../../../reference/runtime/host-main.cjs#L693733-L693749) | `FunctionDeclaration` | no | `value, maxChars` |
| [evaluation:490969-490985](../../../../../../reference/runtime/sand-eval-runner.cjs#L490969-L490985) | `FunctionDeclaration` | no | `value, maxChars` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:693733-693749](../../../../../../reference/runtime/host-main.cjs#L693733-L693749) | 2 | 1 | 0 | 2 | 0 | 0 |
| [evaluation:490969-490985](../../../../../../reference/runtime/sand-eval-runner.cjs#L490969-L490985) | 2 | 1 | 0 | 2 | 0 | 0 |

### host:693733

Calls written directly in this body: `.trim`, `Math.ceil`, `Math.floor`, `Math.max`, `normalized.slice`, `value.replace`.

Assignment or increment targets: `attempt`, `available`, `omittedChars`, `omittedLabel`.

SHA-256 of the source span: `16f0ad1ce85b91fda535494dea42047cdfa7fa9bd66efb848bf8b08d3dbb36f2`.

### evaluation:490969

Calls written directly in this body: `.trim`, `Math.ceil`, `Math.floor`, `Math.max`, `normalized.slice`, `value.replace`.

Assignment or increment targets: `attempt`, `available`, `omittedChars`, `omittedLabel`.

SHA-256 of the source span: `16f0ad1ce85b91fda535494dea42047cdfa7fa9bd66efb848bf8b08d3dbb36f2`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
