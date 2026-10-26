# `isUnresolvedProviderKeyedTool`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/approvals/README.en.md).

**Module:** `core/runner/external-send/tool-calls.ts` · [Module README](../../../../../../modules/core/runner/external-send/tool-calls-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:539112-539114](../../../../../../../reference/runtime/sand-eval-runner.cjs#L539112-L539114) | `FunctionDeclaration` | no | `toolName, resolveHost` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:539112-539114](../../../../../../../reference/runtime/sand-eval-runner.cjs#L539112-L539114) | 0 | 0 | 0 | 1 | 0 | 0 |

### evaluation:539112

Calls written directly in this body: `classifyProviderKeyedTool`, `isUrlLessBoxPlaywrightTool`, `toolName.includes`.

SHA-256 of the source span: `f0c1fda43118ca8b3a7826a79c947345070345558a02163f3fbf157232be5d1e`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
