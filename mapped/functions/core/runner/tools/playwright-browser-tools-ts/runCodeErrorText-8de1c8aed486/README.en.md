# `runCodeErrorText`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/browser-computer/README.en.md).

**Module:** `core/runner/tools/playwright-browser-tools.ts` · [Module README](../../../../../../modules/core/runner/tools/playwright-browser-tools-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:750804-750807](../../../../../../../reference/runtime/host-main.cjs#L750804-L750807) | `FunctionDeclaration` | no | `success2` |
| [evaluation:523655-523658](../../../../../../../reference/runtime/sand-eval-runner.cjs#L523655-L523658) | `FunctionDeclaration` | no | `success2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:750804-750807](../../../../../../../reference/runtime/host-main.cjs#L750804-L750807) | 1 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:523655-523658](../../../../../../../reference/runtime/sand-eval-runner.cjs#L523655-L523658) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:750804

Calls written directly in this body: `success2.content.find`.

SHA-256 of the source span: `d85483ac00c4017132da7a10e07f5f9cf18fc189f1a805704becd9ab41ab0af2`.

### evaluation:523655

Calls written directly in this body: `success2.content.find`.

SHA-256 of the source span: `d85483ac00c4017132da7a10e07f5f9cf18fc189f1a805704becd9ab41ab0af2`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
