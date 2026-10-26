# `describeAttachments`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/send-email-tool.ts` · [Module README](../../../../../../modules/core/runner/tools/send-email-tool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:764357-764360](../../../../../../../reference/runtime/host-main.cjs#L764357-L764360) | `FunctionDeclaration` | no | `described2` |
| [evaluation:557725-557728](../../../../../../../reference/runtime/sand-eval-runner.cjs#L557725-L557728) | `FunctionDeclaration` | no | `described2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:764357-764360](../../../../../../../reference/runtime/host-main.cjs#L764357-L764360) | 1 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:557725-557728](../../../../../../../reference/runtime/sand-eval-runner.cjs#L557725-L557728) | 1 | 0 | 0 | 2 | 0 | 0 |

### host:764357

Calls written directly in this body: `.join`, `described2.map`.

SHA-256 of the source span: `a7cf6964920f1cfc964d6f141ab36a8438fe97f9e985440f82ac621a1a669c63`.

### evaluation:557725

Calls written directly in this body: `.join`, `described2.map`.

SHA-256 of the source span: `a7cf6964920f1cfc964d6f141ab36a8438fe97f9e985440f82ac621a1a669c63`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
