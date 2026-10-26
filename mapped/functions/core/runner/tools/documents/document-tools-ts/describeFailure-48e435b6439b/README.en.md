# `describeFailure`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/documents/document-tools.ts` · [Module README](../../../../../../../modules/core/runner/tools/documents/document-tools-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:776407-776412](../../../../../../../../reference/runtime/host-main.cjs#L776407-L776412) | `FunctionDeclaration` | no | `failure3` |
| [evaluation:576058-576063](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L576058-L576063) | `FunctionDeclaration` | no | `failure3` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:776407-776412](../../../../../../../../reference/runtime/host-main.cjs#L776407-L776412) | 2 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:576058-576063](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L576058-L576063) | 2 | 0 | 0 | 1 | 0 | 0 |

### host:776407

Calls written directly in this body: no calls identifiable by name.

Assignment or increment targets: `text3`.

SHA-256 of the source span: `2a6f127d9fd301fbfdef2172059f474aa184203935f7df60b016a047e4d89f21`.

### evaluation:576058

Calls written directly in this body: no calls identifiable by name.

Assignment or increment targets: `text3`.

SHA-256 of the source span: `2a6f127d9fd301fbfdef2172059f474aa184203935f7df60b016a047e4d89f21`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).
