# `buildDraftCallArgs`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/draft-connector-results.ts` · [Module README](../../../../../../modules/core/runner/tools/draft-connector-results-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:732618-732628](../../../../../../../reference/runtime/host-main.cjs#L732618-L732628) | `FunctionDeclaration` | no | `spec` |
| [evaluation:540140-540150](../../../../../../../reference/runtime/sand-eval-runner.cjs#L540140-L540150) | `FunctionDeclaration` | no | `spec` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:732618-732628](../../../../../../../reference/runtime/host-main.cjs#L732618-L732628) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:540140-540150](../../../../../../../reference/runtime/sand-eval-runner.cjs#L540140-L540150) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:732618

Calls written directly in this body: `.map`, `Object.entries`, `Object.fromEntries`, `new McpArgs`.

SHA-256 of the source span: `362169225ad4f2b9727457d33ee6ca8036ca57690c878043f0737ff0bc344c10`.

### evaluation:540140

Calls written directly in this body: `.map`, `Object.entries`, `Object.fromEntries`, `new McpArgs`.

SHA-256 of the source span: `a9430c56292089757625007800702e1685f657853248f58ed919f2c7d0531cdf`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
