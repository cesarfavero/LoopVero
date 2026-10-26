# `reportedFileUpload`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/browser-computer/README.en.md).

**Module:** `core/runner/tools/playwright-browser-tools.ts` · [Module README](../../../../../../modules/core/runner/tools/playwright-browser-tools-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:750705-750709](../../../../../../../reference/runtime/host-main.cjs#L750705-L750709) | `FunctionDeclaration` | no | `value` |
| [evaluation:523556-523560](../../../../../../../reference/runtime/sand-eval-runner.cjs#L523556-L523560) | `FunctionDeclaration` | no | `value` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:750705-750709](../../../../../../../reference/runtime/host-main.cjs#L750705-L750709) | 2 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:523556-523560](../../../../../../../reference/runtime/sand-eval-runner.cjs#L523556-L523560) | 2 | 0 | 0 | 2 | 0 | 0 |

### host:750705

Calls written directly in this body: `reportedFileUploadSchema.safeParse`.

SHA-256 of the source span: `2a23f7198b378b4b465f6d78106e5d7b9fed4c47c60951f39d0d63e96a3c81fc`.

### evaluation:523556

Calls written directly in this body: `reportedFileUploadSchema.safeParse`.

SHA-256 of the source span: `2cd8f0d14d29879e811c6f9992098c79b3794fa48e7ec6a4cd4897d98beaae30`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
