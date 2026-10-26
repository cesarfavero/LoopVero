# `createComputerTool/descriptionGenerator`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/browser-computer/README.en.md).

**Module:** `core/runner/tools/sand-computer-tool.ts` · [Module README](../../../../../../modules/core/runner/tools/sand-computer-tool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:777450-777453](../../../../../../../reference/runtime/host-main.cjs#L777450-L777453) | `ArrowFunctionExpression` | no | `(none)` |
| [evaluation:577095-577098](../../../../../../../reference/runtime/sand-eval-runner.cjs#L577095-L577098) | `ArrowFunctionExpression` | no | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:777450-777453](../../../../../../../reference/runtime/host-main.cjs#L777450-L777453) | 1 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:577095-577098](../../../../../../../reference/runtime/sand-eval-runner.cjs#L577095-L577098) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:777450

Calls written directly in this body: `batchingSentence`, `deps.getCombinedMode`, `displaySpaceSentence`.

SHA-256 of the source span: `961dc0a2a09753e87c7ab048387e0bfc263ce527789aace905f65c1f48610685`.

### evaluation:577095

Calls written directly in this body: `batchingSentence`, `deps.getCombinedMode`, `displaySpaceSentence`.

SHA-256 of the source span: `961dc0a2a09753e87c7ab048387e0bfc263ce527789aace905f65c1f48610685`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
