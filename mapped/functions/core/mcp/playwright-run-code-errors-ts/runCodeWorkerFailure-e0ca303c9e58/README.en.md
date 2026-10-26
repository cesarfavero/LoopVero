# `runCodeWorkerFailure`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/browser-computer/README.en.md).

**Module:** `core/mcp/playwright-run-code-errors.ts` · [Module README](../../../../../modules/core/mcp/playwright-run-code-errors-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:700267-700279](../../../../../../reference/runtime/host-main.cjs#L700267-L700279) | `FunctionDeclaration` | no | `failure3` |
| [evaluation:514048-514060](../../../../../../reference/runtime/sand-eval-runner.cjs#L514048-L514060) | `FunctionDeclaration` | no | `failure3` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:700267-700279](../../../../../../reference/runtime/host-main.cjs#L700267-L700279) | 2 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:514048-514060](../../../../../../reference/runtime/sand-eval-runner.cjs#L514048-L514060) | 2 | 0 | 0 | 1 | 0 | 0 |

### host:700267

Calls written directly in this body: `Number`, `RUN_CODE_WORKER_EXIT.exec`, `linuxSignalOf`, `termSignalOf`, `workerFailureReason`.

SHA-256 of the source span: `e9a8dbaca9e345542188e63cce44cebcc272b82d74c464bfd93efd2cd97550f8`.

### evaluation:514048

Calls written directly in this body: `Number`, `RUN_CODE_WORKER_EXIT.exec`, `linuxSignalOf`, `termSignalOf`, `workerFailureReason`.

SHA-256 of the source span: `e9a8dbaca9e345542188e63cce44cebcc272b82d74c464bfd93efd2cd97550f8`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
