# `namedTitleCount`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/link-items/link-items.ts` · [Module README](../../../../../../../modules/core/runner/tools/link-items/link-items-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:741140-741152](../../../../../../../../reference/runtime/host-main.cjs#L741140-L741152) | `FunctionDeclaration` | no | `text3, titles` |
| [evaluation:482087-482099](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L482087-L482099) | `FunctionDeclaration` | no | `text3, titles` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:741140-741152](../../../../../../../../reference/runtime/host-main.cjs#L741140-L741152) | 1 | 1 | 0 | 1 | 0 | 0 |
| [evaluation:482087-482099](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L482087-L482099) | 1 | 1 | 0 | 1 | 0 | 0 |

### host:741140

Calls written directly in this body: `.filter`, `.sort`, `claimed.push`, `spansOf`.

Assignment or increment targets: `named2`.

SHA-256 of the source span: `7df8677f1076b82cca9fde5fcb1186364c4c3c85914f2a5213d631ae5d6b46ec`.

### evaluation:482087

Calls written directly in this body: `.filter`, `.sort`, `claimed.push`, `spansOf`.

Assignment or increment targets: `named2`.

SHA-256 of the source span: `7df8677f1076b82cca9fde5fcb1186364c4c3c85914f2a5213d631ae5d6b46ec`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).
