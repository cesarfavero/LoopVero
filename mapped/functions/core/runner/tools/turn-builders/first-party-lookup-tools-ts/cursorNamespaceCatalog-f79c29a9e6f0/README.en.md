# `cursorNamespaceCatalog`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/turn-builders/first-party-lookup-tools.ts` · [Module README](../../../../../../../modules/core/runner/tools/turn-builders/first-party-lookup-tools-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:578893-578905](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L578893-L578905) | `FunctionDeclaration` | no | `registry3, decisions` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:578893-578905](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L578893-L578905) | 0 | 0 | 0 | 1 | 0 | 0 |

### evaluation:578893

Calls written directly in this body: `.join`, `names3.flatMap`, `names3.join`, `registry3.getToolNames`.

SHA-256 of the source span: `7a1c09e2dad6b603a01a5eb2379b5b3dbe89fb25a2a2e7b418d4a378fe01dc7c`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).
