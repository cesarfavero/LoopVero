# `inferenceHookGuardrailRecord`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/action-audit/guardrail-audit.ts` · [Module README](../../../../../../modules/core/runner/action-audit/guardrail-audit-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:483573-483587](../../../../../../../reference/runtime/sand-eval-runner.cjs#L483573-L483587) | `FunctionDeclaration` | no | `failure3, identity2, attribution` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:483573-483587](../../../../../../../reference/runtime/sand-eval-runner.cjs#L483573-L483587) | 0 | 0 | 0 | 1 | 0 | 0 |

### evaluation:483573

Calls written directly in this body: `Date.now`.

SHA-256 of the source span: `0abf123ef204e2929be3c82541cef461b921759422b48b63abdca4a129a84184`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
