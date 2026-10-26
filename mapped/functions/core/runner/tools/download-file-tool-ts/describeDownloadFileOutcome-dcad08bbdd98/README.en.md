# `describeDownloadFileOutcome`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/download-file-tool.ts` · [Module README](../../../../../../modules/core/runner/tools/download-file-tool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:773827-773857](../../../../../../../reference/runtime/host-main.cjs#L773827-L773857) | `FunctionDeclaration` | no | `outcome, request5` |
| [evaluation:573048-573078](../../../../../../../reference/runtime/sand-eval-runner.cjs#L573048-L573078) | `FunctionDeclaration` | no | `outcome, request3` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:773827-773857](../../../../../../../reference/runtime/host-main.cjs#L773827-L773857) | 11 | 0 | 0 | 8 | 0 | 0 |
| [evaluation:573048-573078](../../../../../../../reference/runtime/sand-eval-runner.cjs#L573048-L573078) | 11 | 0 | 0 | 8 | 0 | 0 |

### host:773827

Calls written directly in this body: `JSON.stringify`, `formatBytes`, `lines2.join`, `lines2.push`, `outcome.allowedRoots.join`, `outcome.available.join`.

SHA-256 of the source span: `ec5a624b706b29b741a92aa080d8845066e7a1f10b5d967682415efae28e2809`.

### evaluation:573048

Calls written directly in this body: `JSON.stringify`, `formatBytes`, `lines2.join`, `lines2.push`, `outcome.allowedRoots.join`, `outcome.available.join`.

SHA-256 of the source span: `1d38ecf8e5addc1c14cc9fcb1863dd081badc2ceae285184d2592474a8a7698b`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
