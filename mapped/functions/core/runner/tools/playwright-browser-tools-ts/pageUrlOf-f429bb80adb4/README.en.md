# `pageUrlOf`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/browser-computer/README.en.md).

**Module:** `core/runner/tools/playwright-browser-tools.ts` · [Module README](../../../../../../modules/core/runner/tools/playwright-browser-tools-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:750798-750803](../../../../../../../reference/runtime/host-main.cjs#L750798-L750803) | `FunctionDeclaration` | no | `result, tabList` |
| [evaluation:523649-523654](../../../../../../../reference/runtime/sand-eval-runner.cjs#L523649-L523654) | `FunctionDeclaration` | no | `result, tabList` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:750798-750803](../../../../../../../reference/runtime/host-main.cjs#L750798-L750803) | 2 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:523649-523654](../../../../../../../reference/runtime/sand-eval-runner.cjs#L523649-L523654) | 2 | 0 | 0 | 2 | 0 | 0 |

### host:750798

Calls written directly in this body: `PAGE_URL_LINE3.exec`, `currentTabUrlOf`, `successOf`, `textOf`.

SHA-256 of the source span: `7a68d292c0e23508e2dd1eed319c2894a39dbce745a6cb4a0d61a202b6d25369`.

### evaluation:523649

Calls written directly in this body: `PAGE_URL_LINE3.exec`, `currentTabUrlOf`, `successOf`, `textOf2`.

SHA-256 of the source span: `691fce8d288cc2bf9e9c3d738ee766d46017ed01eade062dcf1c70ed0ffc5e81`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
