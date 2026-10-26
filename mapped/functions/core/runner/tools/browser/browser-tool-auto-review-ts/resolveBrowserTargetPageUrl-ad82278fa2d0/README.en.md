# `resolveBrowserTargetPageUrl`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/approvals/README.en.md).

**Module:** `core/runner/tools/browser/browser-tool-auto-review.ts` · [Module README](../../../../../../../modules/core/runner/tools/browser/browser-tool-auto-review-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:743413-743431](../../../../../../../../reference/runtime/host-main.cjs#L743413-L743431) | `FunctionDeclaration` | no | `{   probeStdout,   stateJson,   viewId }` |
| [evaluation:516264-516282](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L516264-L516282) | `FunctionDeclaration` | no | `{   probeStdout,   stateJson,   viewId }` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:743413-743431](../../../../../../../../reference/runtime/host-main.cjs#L743413-L743431) | 5 | 1 | 0 | 3 | 0 | 0 |
| [evaluation:516264-516282](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L516264-L516282) | 5 | 1 | 0 | 3 | 0 | 0 |

### host:743413

Calls written directly in this body: `normalizeNavigationUrl`, `parseBrowserViewState`, `parseNavigationProbeOutput`, `state.urls.get`, `state.views.get`.

SHA-256 of the source span: `74583fccad33b545a74f755752c492b38eb1d384408665b2681416eeb785e19a`.

### evaluation:516264

Calls written directly in this body: `normalizeNavigationUrl`, `parseBrowserViewState`, `parseNavigationProbeOutput`, `state.urls.get`, `state.views.get`.

SHA-256 of the source span: `74583fccad33b545a74f755752c492b38eb1d384408665b2681416eeb785e19a`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).
