# `detailsPaneLines`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/box-reference-docs.ts` · [Module README](../../../../../modules/core/runner/box-reference-docs-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:558376-558396](../../../../../../reference/runtime/host-main.cjs#L558376-L558396) | `FunctionDeclaration` | no | `facts` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:558376-558396](../../../../../../reference/runtime/host-main.cjs#L558376-L558396) | 3 | 0 | 0 | 2 | 0 | 0 |

### host:558376

Calls written directly in this body: `.headerControls.find`, `MAP.infoPane.openers.join`, `SAND_UI_INFO_PANE_LAYOUT_KINDS.flatMap`, `layoutLines`, `paneLayoutOf`, `quote`, `sandUiMapCommand`, `sandUiMapLayout`.

SHA-256 of the source span: `4ba03550873c3b57e1f6e9bd14376ccf4bc7e6b019896058cd22d8e50fa7cf3b`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
