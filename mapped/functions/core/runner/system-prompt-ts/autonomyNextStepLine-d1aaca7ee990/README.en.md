# `autonomyNextStepLine`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/prompts/README.en.md).

**Module:** `core/runner/system-prompt.ts` · [Module README](../../../../../modules/core/runner/system-prompt-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:753835-753837](../../../../../../reference/runtime/host-main.cjs#L753835-L753837) | `FunctionDeclaration` | no | `safetyCheckClause` |
| [evaluation:532980-532982](../../../../../../reference/runtime/sand-eval-runner.cjs#L532980-L532982) | `FunctionDeclaration` | no | `safetyCheckClause` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:753835-753837](../../../../../../reference/runtime/host-main.cjs#L753835-L753837) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:532980-532982](../../../../../../reference/runtime/sand-eval-runner.cjs#L532980-L532982) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:753835

Calls written directly in this body: no calls identifiable by name.

SHA-256 of the source span: `4e5d8a1093c2ca2d015be272735d18f04a7a6e6b2df12b11c1f5c0138df621f3`.

### evaluation:532980

Calls written directly in this body: no calls identifiable by name.

SHA-256 of the source span: `4e5d8a1093c2ca2d015be272735d18f04a7a6e6b2df12b11c1f5c0138df621f3`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
