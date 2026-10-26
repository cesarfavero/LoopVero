# `unwrapTexTextMacros`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `shared/media/markdown-preview.ts` · [Module README](../../../../../modules/shared/media/markdown-preview-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:722096-722099](../../../../../../reference/runtime/host-main.cjs#L722096-L722099) | `FunctionDeclaration` | no | `tex` |
| [evaluation:540073-540076](../../../../../../reference/runtime/sand-eval-runner.cjs#L540073-L540076) | `FunctionDeclaration` | no | `tex` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:722096-722099](../../../../../../reference/runtime/host-main.cjs#L722096-L722099) | 1 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:540073-540076](../../../../../../reference/runtime/sand-eval-runner.cjs#L540073-L540076) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:722096

Calls written directly in this body: `tex.replace`, `unwrapTexTextMacros`.

SHA-256 of the source span: `5dafcd0810b363b348e1322086d6b4ee1670cbdb0a36dbe05af655a42419bbf1`.

### evaluation:540073

Calls written directly in this body: `tex.replace`, `unwrapTexTextMacros`.

SHA-256 of the source span: `5dafcd0810b363b348e1322086d6b4ee1670cbdb0a36dbe05af655a42419bbf1`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
