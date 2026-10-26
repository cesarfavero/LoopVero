# `withRedactedText/rewrite`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/browser-computer/README.en.md).

**Module:** `core/runner/tools/playwright-browser-tools.ts` · [Module README](../../../../../../modules/core/runner/tools/playwright-browser-tools-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:751050-751054](../../../../../../../reference/runtime/host-main.cjs#L751050-L751054) | `ArrowFunctionExpression` | no | `text3` |
| [evaluation:523901-523905](../../../../../../../reference/runtime/sand-eval-runner.cjs#L523901-L523905) | `ArrowFunctionExpression` | no | `text3` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:751050-751054](../../../../../../../reference/runtime/host-main.cjs#L751050-L751054) | 1 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:523901-523905](../../../../../../../reference/runtime/sand-eval-runner.cjs#L523901-L523905) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:751050

Calls written directly in this body: `redact`.

Assignment or increment targets: `changed`.

SHA-256 of the source span: `3e7d9c334b513c8211f032dd85c28619c9a7c11c18eb60ceb1f9dc526189f5ce`.

### evaluation:523901

Calls written directly in this body: `redact`.

Assignment or increment targets: `changed`.

SHA-256 of the source span: `3e7d9c334b513c8211f032dd85c28619c9a7c11c18eb60ceb1f9dc526189f5ce`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
