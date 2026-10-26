# `findLinkItemsRepetition`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/link-items/link-items.ts` · [Module README](../../../../../../../modules/core/runner/tools/link-items/link-items-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:741164-741169](../../../../../../../../reference/runtime/host-main.cjs#L741164-L741169) | `FunctionDeclaration` | no | `lead, items` |
| [evaluation:482111-482116](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L482111-L482116) | `FunctionDeclaration` | no | `lead, items` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:741164-741169](../../../../../../../../reference/runtime/host-main.cjs#L741164-L741169) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:482111-482116](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L482111-L482116) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:741164

Calls written directly in this body: `findNamedItemsRepetition`, `items.map`.

SHA-256 of the source span: `178068a80264084274d061d5137fa9dd6f9cfe9b9b7c3e88cdd03bcb79258a73`.

### evaluation:482111

Calls written directly in this body: `findNamedItemsRepetition`, `items.map`.

SHA-256 of the source span: `178068a80264084274d061d5137fa9dd6f9cfe9b9b7c3e88cdd03bcb79258a73`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).
