# `describeSandBrowserShellError`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/browser-computer/README.en.md).

**Module:** `core/runner/tools/sand-browser-shell-diagnostic.ts` · [Module README](../../../../../../modules/core/runner/tools/sand-browser-shell-diagnostic-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:724040-724058](../../../../../../../reference/runtime/host-main.cjs#L724040-L724058) | `FunctionDeclaration` | no | `result` |
| [evaluation:559998-560016](../../../../../../../reference/runtime/sand-eval-runner.cjs#L559998-L560016) | `FunctionDeclaration` | no | `result` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:724040-724058](../../../../../../../reference/runtime/host-main.cjs#L724040-L724058) | 7 | 0 | 0 | 7 | 0 | 0 |
| [evaluation:559998-560016](../../../../../../../reference/runtime/sand-eval-runner.cjs#L559998-L560016) | 7 | 0 | 0 | 7 | 0 | 0 |

### host:724040

Calls written directly in this body: `describeAbortReason`, `describeProcess`.

SHA-256 of the source span: `ea5def546f6f7f77028ed56beb210dfd9cc8c01ab3806274d621bfd3810fd92a`.

### evaluation:559998

Calls written directly in this body: `describeAbortReason`, `describeProcess`.

SHA-256 of the source span: `ea5def546f6f7f77028ed56beb210dfd9cc8c01ab3806274d621bfd3810fd92a`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
