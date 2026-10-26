# `keptRunCodeWarning`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/browser-computer/README.en.md).

**Module:** `core/runner/tools/playwright-browser-tools.ts` · [Module README](../../../../../../modules/core/runner/tools/playwright-browser-tools-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:750886-750892](../../../../../../../reference/runtime/host-main.cjs#L750886-L750892) | `FunctionDeclaration` | no | `before` |
| [evaluation:523737-523743](../../../../../../../reference/runtime/sand-eval-runner.cjs#L523737-L523743) | `FunctionDeclaration` | no | `before` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:750886-750892](../../../../../../../reference/runtime/host-main.cjs#L750886-L750892) | 3 | 0 | 0 | 3 | 0 | 0 |
| [evaluation:523737-523743](../../../../../../../reference/runtime/sand-eval-runner.cjs#L523737-L523743) | 3 | 0 | 0 | 3 | 0 | 0 |

### host:750886

Calls written directly in this body: `successOf`, `text3.includes`, `textOf`.

SHA-256 of the source span: `5e2736f932c34fe37ce3507d8c58f2966950627b0c5ffea7bcb763ad72b4d1ad`.

### evaluation:523737

Calls written directly in this body: `successOf`, `text3.includes`, `textOf2`.

SHA-256 of the source span: `5d40fe599aafb9dfae9117a2aad0cdebecad8c8b165cb865a8d394beff0cc881`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
