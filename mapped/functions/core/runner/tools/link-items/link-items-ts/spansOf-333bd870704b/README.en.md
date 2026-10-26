# `spansOf`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/link-items/link-items.ts` · [Module README](../../../../../../../modules/core/runner/tools/link-items/link-items-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:741133-741139](../../../../../../../../reference/runtime/host-main.cjs#L741133-L741139) | `FunctionDeclaration` | no | `text3, needle` |
| [evaluation:482080-482086](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L482080-L482086) | `FunctionDeclaration` | no | `text3, needle` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:741133-741139](../../../../../../../../reference/runtime/host-main.cjs#L741133-L741139) | 0 | 1 | 0 | 1 | 0 | 0 |
| [evaluation:482080-482086](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L482080-L482086) | 0 | 1 | 0 | 1 | 0 | 0 |

### host:741133

Calls written directly in this body: `spans.push`, `text3.indexOf`.

Assignment or increment targets: `at3`.

SHA-256 of the source span: `c313569f6cbe6b813d4594096d8312672383f651fef40b90c4f0f98b3327011f`.

### evaluation:482080

Calls written directly in this body: `spans.push`, `text3.indexOf`.

Assignment or increment targets: `at3`.

SHA-256 of the source span: `c313569f6cbe6b813d4594096d8312672383f651fef40b90c4f0f98b3327011f`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).
