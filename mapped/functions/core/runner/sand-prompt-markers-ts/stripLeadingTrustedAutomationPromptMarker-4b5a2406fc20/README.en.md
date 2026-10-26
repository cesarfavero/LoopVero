# `stripLeadingTrustedAutomationPromptMarker`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/prompts/README.en.md).

**Module:** `core/runner/sand-prompt-markers.ts` · [Module README](../../../../../modules/core/runner/sand-prompt-markers-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:491167-491170](../../../../../../reference/runtime/host-main.cjs#L491167-L491170) | `FunctionDeclaration` | no | `text3` |
| [evaluation:526073-526076](../../../../../../reference/runtime/sand-eval-runner.cjs#L526073-L526076) | `FunctionDeclaration` | no | `text3` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:491167-491170](../../../../../../reference/runtime/host-main.cjs#L491167-L491170) | 1 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:526073-526076](../../../../../../reference/runtime/sand-eval-runner.cjs#L526073-L526076) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:491167

Calls written directly in this body: `leadingMarkerOf`, `text3.slice`.

SHA-256 of the source span: `6e143f72f047c33be51b0c1fd5565c4d6e88fd071ed839c1314abeaedeb141ef`.

### evaluation:526073

Calls written directly in this body: `leadingMarkerOf`, `text3.slice`.

SHA-256 of the source span: `6e143f72f047c33be51b0c1fd5565c4d6e88fd071ed839c1314abeaedeb141ef`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
