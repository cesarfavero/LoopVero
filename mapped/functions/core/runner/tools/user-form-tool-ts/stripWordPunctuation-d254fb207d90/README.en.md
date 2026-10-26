# `stripWordPunctuation`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/user-form-tool.ts` · [Module README](../../../../../../modules/core/runner/tools/user-form-tool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:726282-726284](../../../../../../../reference/runtime/host-main.cjs#L726282-L726284) | `FunctionDeclaration` | no | `word` |
| [evaluation:560897-560899](../../../../../../../reference/runtime/sand-eval-runner.cjs#L560897-L560899) | `FunctionDeclaration` | no | `word` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:726282-726284](../../../../../../../reference/runtime/host-main.cjs#L726282-L726284) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:560897-560899](../../../../../../../reference/runtime/sand-eval-runner.cjs#L560897-L560899) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:726282

Calls written directly in this body: `word.replace`.

SHA-256 of the source span: `b33e51848733b553f4affd06eb73198927b4385e3dabb25f05fa1be804cc985a`.

### evaluation:560897

Calls written directly in this body: `word.replace`.

SHA-256 of the source span: `b33e51848733b553f4affd06eb73198927b4385e3dabb25f05fa1be804cc985a`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
