# `withRedactedText`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/browser-computer/README.en.md).

**Module:** `core/runner/tools/playwright-browser-tools.ts` · [Module README](../../../../../../modules/core/runner/tools/playwright-browser-tools-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:751046-751063](../../../../../../../reference/runtime/host-main.cjs#L751046-L751063) | `FunctionDeclaration` | no | `result, redact` |
| [evaluation:523897-523914](../../../../../../../reference/runtime/sand-eval-runner.cjs#L523897-L523914) | `FunctionDeclaration` | no | `result, redact` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:751046-751063](../../../../../../../reference/runtime/host-main.cjs#L751046-L751063) | 5 | 1 | 0 | 2 | 0 | 0 |
| [evaluation:523897-523914](../../../../../../../reference/runtime/sand-eval-runner.cjs#L523897-L523914) | 5 | 1 | 0 | 2 | 0 | 0 |

### host:751046

Calls written directly in this body: `result.clone`, `rewrite`.

Assignment or increment targets: `item.content.value.text`, `redacted.result.value.error`.

SHA-256 of the source span: `24c32452c5f4973593025c4756336d2f99774ef8fe508f48493046dc6642e2f1`.

### evaluation:523897

Calls written directly in this body: `result.clone`, `rewrite`.

Assignment or increment targets: `item.content.value.text`, `redacted.result.value.error`.

SHA-256 of the source span: `24c32452c5f4973593025c4756336d2f99774ef8fe508f48493046dc6642e2f1`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
