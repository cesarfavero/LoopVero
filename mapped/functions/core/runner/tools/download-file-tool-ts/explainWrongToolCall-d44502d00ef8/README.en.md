# `explainWrongToolCall`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/download-file-tool.ts` · [Module README](../../../../../../modules/core/runner/tools/download-file-tool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:773763-773780](../../../../../../../reference/runtime/host-main.cjs#L773763-L773780) | `FunctionDeclaration` | no | `webFetchOffered` |
| [evaluation:572984-573001](../../../../../../../reference/runtime/sand-eval-runner.cjs#L572984-L573001) | `FunctionDeclaration` | no | `webFetchOffered` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:773763-773780](../../../../../../../reference/runtime/host-main.cjs#L773763-L773780) | 1 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:572984-573001](../../../../../../../reference/runtime/sand-eval-runner.cjs#L572984-L573001) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:773763

Calls written directly in this body: no calls identifiable by name.

SHA-256 of the source span: `4b1aba5e290ab35a983cad758a8d7cf329459d8a9d60b71ba728621fb2bf1443`.

### evaluation:572984

Calls written directly in this body: no calls identifiable by name.

SHA-256 of the source span: `a11e6c8fa50c7ea7733ebe365d58c90b1ab100c479f2b5d5ff992898775902d9`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
