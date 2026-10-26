# `currentTabUrlOf`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/browser-computer/README.en.md).

**Module:** `core/runner/tools/playwright-browser-tools.ts` · [Module README](../../../../../../modules/core/runner/tools/playwright-browser-tools-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:750793-750797](../../../../../../../reference/runtime/host-main.cjs#L750793-L750797) | `FunctionDeclaration` | no | `text3` |
| [evaluation:523644-523648](../../../../../../../reference/runtime/sand-eval-runner.cjs#L523644-L523648) | `FunctionDeclaration` | no | `text3` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:750793-750797](../../../../../../../reference/runtime/host-main.cjs#L750793-L750797) | 1 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:523644-523648](../../../../../../../reference/runtime/sand-eval-runner.cjs#L523644-L523648) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:750793

Calls written directly in this body: `CURRENT_TAB_ROW.exec`, `[computed].replace`, `row.endsWith`, `row.indexOf`, `row.lastIndexOf`, `row.slice`.

SHA-256 of the source span: `872d6f44d64cd45a56516ca91e20e7a9a1b6c56f21582fa3254083202a2a1d0a`.

### evaluation:523644

Calls written directly in this body: `CURRENT_TAB_ROW.exec`, `[computed].replace`, `row.endsWith`, `row.indexOf`, `row.lastIndexOf`, `row.slice`.

SHA-256 of the source span: `872d6f44d64cd45a56516ca91e20e7a9a1b6c56f21582fa3254083202a2a1d0a`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
