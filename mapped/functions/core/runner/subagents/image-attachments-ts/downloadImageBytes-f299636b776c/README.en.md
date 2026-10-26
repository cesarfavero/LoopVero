# `downloadImageBytes`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/subagents/README.en.md).

**Module:** `core/runner/subagents/image-attachments.ts` · [Module README](../../../../../../modules/core/runner/subagents/image-attachments-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:533452-533467](../../../../../../../reference/runtime/sand-eval-runner.cjs#L533452-L533467) | `FunctionDeclaration` | yes | `{   ctx,   box,   boxId,   path: path33,   failure: failure3 }` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:533452-533467](../../../../../../../reference/runtime/sand-eval-runner.cjs#L533452-L533467) | 1 | 0 | 1 | 1 | 2 | 1 |

### evaluation:533452

Calls written directly in this body: `box.downloadFile`, `failure3`.

Explicit throw targets: `error63`, `failure3`.

SHA-256 of the source span: `271002fb556bf67f3ccff8889c23e195768114934f59564de72eb62c33d5157f`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
