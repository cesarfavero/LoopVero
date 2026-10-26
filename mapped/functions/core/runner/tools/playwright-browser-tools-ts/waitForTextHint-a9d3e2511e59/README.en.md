# `waitForTextHint`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/browser-computer/README.en.md).

**Module:** `core/runner/tools/playwright-browser-tools.ts` · [Module README](../../../../../../modules/core/runner/tools/playwright-browser-tools-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:750910-750919](../../../../../../../reference/runtime/host-main.cjs#L750910-L750919) | `FunctionDeclaration` | no | `reason, text3, runCodeOffered` |
| [evaluation:523761-523770](../../../../../../../reference/runtime/sand-eval-runner.cjs#L523761-L523770) | `FunctionDeclaration` | no | `reason, text3, runCodeOffered` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:750910-750919](../../../../../../../reference/runtime/host-main.cjs#L750910-L750919) | 3 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:523761-523770](../../../../../../../reference/runtime/sand-eval-runner.cjs#L523761-L523770) | 3 | 0 | 0 | 2 | 0 | 0 |

### host:750910

Calls written directly in this body: `Number`, `String`, `WAITED_TEXT.exec`.

SHA-256 of the source span: `26f326672176c64b7a98fc2514320b8d55a250117c6d0ffd23f4b4f3e342a3d1`.

### evaluation:523761

Calls written directly in this body: `Number`, `String`, `WAITED_TEXT.exec`.

SHA-256 of the source span: `26f326672176c64b7a98fc2514320b8d55a250117c6d0ffd23f4b4f3e342a3d1`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
