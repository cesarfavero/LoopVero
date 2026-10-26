# `annotateThrownRunCodeTimeout`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/browser-computer/README.en.md).

**Module:** `core/runner/tools/playwright-browser-tools.ts` · [Module README](../../../../../../modules/core/runner/tools/playwright-browser-tools-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:750866-750885](../../../../../../../reference/runtime/host-main.cjs#L750866-L750885) | `FunctionDeclaration` | no | `error64` |
| [evaluation:523717-523736](../../../../../../../reference/runtime/sand-eval-runner.cjs#L523717-L523736) | `FunctionDeclaration` | no | `error63` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:750866-750885](../../../../../../../reference/runtime/host-main.cjs#L750866-L750885) | 3 | 0 | 0 | 3 | 0 | 0 |
| [evaluation:523717-523736](../../../../../../../reference/runtime/sand-eval-runner.cjs#L523717-L523736) | 3 | 0 | 0 | 3 | 0 | 0 |

### host:750866

Calls written directly in this body: `new CustomToolCallError`, `thrownRunCodeTimeoutMessage`.

SHA-256 of the source span: `27616d0af1b9352068b697a99bcbd305b94df55bdc69615978c09951ae825f33`.

### evaluation:523717

Calls written directly in this body: `new CustomToolCallError`, `thrownRunCodeTimeoutMessage`.

SHA-256 of the source span: `f2ee52690bd8d70d81d1c048cab92cbf546782b4c06d0bfe1d3945013db95f2d`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
