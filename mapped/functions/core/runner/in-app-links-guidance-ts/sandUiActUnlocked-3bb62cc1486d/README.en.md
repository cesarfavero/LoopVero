# `sandUiActUnlocked`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/in-app-links-guidance.ts` · [Module README](../../../../../modules/core/runner/in-app-links-guidance-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:557634-557636](../../../../../../reference/runtime/host-main.cjs#L557634-L557636) | `FunctionDeclaration` | no | `gates` |
| [evaluation:546081-546083](../../../../../../reference/runtime/sand-eval-runner.cjs#L546081-L546083) | `FunctionDeclaration` | no | `gates` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:557634-557636](../../../../../../reference/runtime/host-main.cjs#L557634-L557636) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:546081-546083](../../../../../../reference/runtime/sand-eval-runner.cjs#L546081-L546083) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:557634

Calls written directly in this body: `sandUiOpenUnlocked`.

SHA-256 of the source span: `d65a3dead4046dc78db10078a4e0e60e8cf468748b03cbf66a0a6142ba6a7875`.

### evaluation:546081

Calls written directly in this body: `sandUiOpenUnlocked`.

SHA-256 of the source span: `d65a3dead4046dc78db10078a4e0e60e8cf468748b03cbf66a0a6142ba6a7875`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
