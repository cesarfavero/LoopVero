# `fileUploadOf`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/browser-computer/README.en.md).

**Module:** `core/runner/tools/playwright-browser-tools.ts` · [Module README](../../../../../../modules/core/runner/tools/playwright-browser-tools-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:750948-750951](../../../../../../../reference/runtime/host-main.cjs#L750948-L750951) | `FunctionDeclaration` | no | `result` |
| [evaluation:523799-523802](../../../../../../../reference/runtime/sand-eval-runner.cjs#L523799-L523802) | `FunctionDeclaration` | no | `result` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:750948-750951](../../../../../../../reference/runtime/host-main.cjs#L750948-L750951) | 1 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:523799-523802](../../../../../../../reference/runtime/sand-eval-runner.cjs#L523799-L523802) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:750948

Calls written directly in this body: `INPUT_FALLBACK_RESULT.test`, `successOf`, `textOf`.

SHA-256 of the source span: `1586e9b8043e232a86db7ed1d5831234ef45baff4bd72e2e7e4353ab89661cd7`.

### evaluation:523799

Calls written directly in this body: `INPUT_FALLBACK_RESULT.test`, `successOf`, `textOf2`.

SHA-256 of the source span: `a7432373d8358938b2525087c0f0145f14d1ec8f4b3875dfb4f24d4adf2e7b49`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
