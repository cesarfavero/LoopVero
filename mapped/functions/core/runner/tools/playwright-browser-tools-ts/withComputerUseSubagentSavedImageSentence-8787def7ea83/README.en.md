# `withComputerUseSubagentSavedImageSentence`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/browser-computer/README.en.md).

**Module:** `core/runner/tools/playwright-browser-tools.ts` · [Module README](../../../../../../modules/core/runner/tools/playwright-browser-tools-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:750968-750971](../../../../../../../reference/runtime/host-main.cjs#L750968-L750971) | `FunctionDeclaration` | no | `text3` |
| [evaluation:523819-523822](../../../../../../../reference/runtime/sand-eval-runner.cjs#L523819-L523822) | `FunctionDeclaration` | no | `text3` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:750968-750971](../../../../../../../reference/runtime/host-main.cjs#L750968-L750971) | 1 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:523819-523822](../../../../../../../reference/runtime/sand-eval-runner.cjs#L523819-L523822) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:750968

Calls written directly in this body: `text3.indexOf`, `text3.slice`.

SHA-256 of the source span: `c0789f90e8a21dc4dc990aa098bc7722b5e23f2b64c2eeb1d7fd11a6bd6c0ac0`.

### evaluation:523819

Calls written directly in this body: `text3.indexOf`, `text3.slice`.

SHA-256 of the source span: `c0789f90e8a21dc4dc990aa098bc7722b5e23f2b64c2eeb1d7fd11a6bd6c0ac0`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
