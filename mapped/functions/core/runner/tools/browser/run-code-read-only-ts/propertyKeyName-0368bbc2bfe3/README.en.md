# `propertyKeyName`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/browser-computer/README.en.md).

**Module:** `core/runner/tools/browser/run-code-read-only.ts` · [Module README](../../../../../../../modules/core/runner/tools/browser/run-code-read-only-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:749668-749672](../../../../../../../../reference/runtime/host-main.cjs#L749668-L749672) | `FunctionDeclaration` | no | `key` |
| [evaluation:522519-522523](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L522519-L522523) | `FunctionDeclaration` | no | `key` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:749668-749672](../../../../../../../../reference/runtime/host-main.cjs#L749668-L749672) | 2 | 0 | 0 | 3 | 0 | 0 |
| [evaluation:522519-522523](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L522519-L522523) | 2 | 0 | 0 | 3 | 0 | 0 |

### host:749668

Calls written directly in this body: `String`.

SHA-256 of the source span: `5587a92106f9eb3c31389c340ebb0c7b7f256145cbb8759d5e0616f49e86fe8e`.

### evaluation:522519

Calls written directly in this body: `String`.

SHA-256 of the source span: `5587a92106f9eb3c31389c340ebb0c7b7f256145cbb8759d5e0616f49e86fe8e`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).
