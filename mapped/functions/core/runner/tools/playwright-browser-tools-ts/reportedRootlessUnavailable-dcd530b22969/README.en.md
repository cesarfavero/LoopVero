# `reportedRootlessUnavailable`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/browser-computer/README.en.md).

**Module:** `core/runner/tools/playwright-browser-tools.ts` · [Module README](../../../../../../modules/core/runner/tools/playwright-browser-tools-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:750711-750714](../../../../../../../reference/runtime/host-main.cjs#L750711-L750714) | `FunctionDeclaration` | no | `value` |
| [evaluation:523562-523565](../../../../../../../reference/runtime/sand-eval-runner.cjs#L523562-L523565) | `FunctionDeclaration` | no | `value` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:750711-750714](../../../../../../../reference/runtime/host-main.cjs#L750711-L750714) | 1 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:523562-523565](../../../../../../../reference/runtime/sand-eval-runner.cjs#L523562-L523565) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:750711

Calls written directly in this body: `reportedRootlessUnavailableSchema.safeParse`.

SHA-256 of the source span: `9edb011d047f5e583e4f76f64c9d9a909d6e5477c92fea9bdd03c419d54376dd`.

### evaluation:523562

Calls written directly in this body: `reportedRootlessUnavailableSchema.safeParse`.

SHA-256 of the source span: `3630b11a38b83b181a7df992c211ab90b48ebef45a99063ca623de438f8f0917`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
