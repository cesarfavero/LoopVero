# `sandMountedTurnTools`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tool-policy/mounted-turn-tools.ts` · [Module README](../../../../../../modules/core/runner/tool-policy/mounted-turn-tools-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:543289-543297](../../../../../../../reference/runtime/sand-eval-runner.cjs#L543289-L543297) | `FunctionDeclaration` | no | `tools` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:543289-543297](../../../../../../../reference/runtime/sand-eval-runner.cjs#L543289-L543297) | 1 | 1 | 0 | 1 | 0 | 0 |

### evaluation:543289

Calls written directly in this body: `GROK_BOT_TOOL_ID_BY_MODEL_NAME.get`, `mounted.add`, `new Set`, `tools.getToolExecutionSet`.

SHA-256 of the source span: `f64424daffe8f828667c5e244a7a763dfef5d9ad56e3173a29e60f4eed065268`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
