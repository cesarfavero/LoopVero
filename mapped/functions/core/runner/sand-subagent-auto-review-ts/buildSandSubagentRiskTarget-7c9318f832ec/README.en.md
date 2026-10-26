# `buildSandSubagentRiskTarget`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/subagents/README.en.md).

**Module:** `core/runner/sand-subagent-auto-review.ts` · [Module README](../../../../../modules/core/runner/sand-subagent-auto-review-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:780785-780804](../../../../../../reference/runtime/host-main.cjs#L780785-L780804) | `FunctionDeclaration` | no | `args` |
| [evaluation:581133-581152](../../../../../../reference/runtime/sand-eval-runner.cjs#L581133-L581152) | `FunctionDeclaration` | no | `args` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:780785-780804](../../../../../../reference/runtime/host-main.cjs#L780785-L780804) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:581133-581152](../../../../../../reference/runtime/sand-eval-runner.cjs#L581133-L581152) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:780785

Calls written directly in this body: `buildProjectPermissionsContext`, `new SmartModeRiskTarget`, `structFromRecord`.

SHA-256 of the source span: `fc098493c6c2b9a2b44a44f9f9dc278ee5049e08c5d407298552f999cbd9c23e`.

### evaluation:581133

Calls written directly in this body: `buildProjectPermissionsContext`, `new SmartModeRiskTarget`, `structFromRecord`.

SHA-256 of the source span: `fc098493c6c2b9a2b44a44f9f9dc278ee5049e08c5d407298552f999cbd9c23e`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
