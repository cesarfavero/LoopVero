# `toolEscalationGuardrailRecords`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/action-audit/guardrail-audit.ts` · [Module README](../../../../../../modules/core/runner/action-audit/guardrail-audit-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:483625-483653](../../../../../../../reference/runtime/sand-eval-runner.cjs#L483625-L483653) | `FunctionDeclaration` | no | `escalation, envelope, answer` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:483625-483653](../../../../../../../reference/runtime/sand-eval-runner.cjs#L483625-L483653) | 3 | 0 | 0 | 1 | 0 | 0 |

### evaluation:483625

Calls written directly in this body: `Math.max`, `holdResolutionOf`.

SHA-256 of the source span: `96480bd4c387639f63ab0bc790b4234b05e3e6de8246c0a132ab20d1ee904782`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
