# `normalizeRowArgs`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/browser-computer/README.en.md).

**Module:** `core/runner/tools/playwright-browser-tools.ts` · [Module README](../../../../../../modules/core/runner/tools/playwright-browser-tools-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:750527-750536](../../../../../../../reference/runtime/host-main.cjs#L750527-L750536) | `FunctionDeclaration` | no | `name18, args` |
| [evaluation:523378-523387](../../../../../../../reference/runtime/sand-eval-runner.cjs#L523378-L523387) | `FunctionDeclaration` | no | `name18, args` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:750527-750536](../../../../../../../reference/runtime/host-main.cjs#L750527-L750536) | 3 | 0 | 0 | 3 | 0 | 0 |
| [evaluation:523378-523387](../../../../../../../reference/runtime/sand-eval-runner.cjs#L523378-L523387) | 3 | 0 | 0 | 3 | 0 | 0 |

### host:750527

Calls written directly in this body: `.filter`, `Object.entries`, `Object.fromEntries`, `browserJobInputFields`.

SHA-256 of the source span: `57d09f066672c0c1d271430eb824e5ce0f8b496ad784d2df94d14c65f743e324`.

### evaluation:523378

Calls written directly in this body: `.filter`, `Object.entries`, `Object.fromEntries`, `browserJobInputFields`.

SHA-256 of the source span: `57d09f066672c0c1d271430eb824e5ce0f8b496ad784d2df94d14c65f743e324`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
