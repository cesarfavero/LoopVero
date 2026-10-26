# `loopDetectedGuardrailRecord`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/action-audit/guardrail-audit.ts` · [Module README](../../../../../../modules/core/runner/action-audit/guardrail-audit-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:483551-483568](../../../../../../../reference/runtime/sand-eval-runner.cjs#L483551-L483568) | `FunctionDeclaration` | no | `report, identity2, attribution` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:483551-483568](../../../../../../../reference/runtime/sand-eval-runner.cjs#L483551-L483568) | 1 | 0 | 0 | 1 | 0 | 0 |

### evaluation:483551

Calls written directly in this body: `Date.now`.

SHA-256 of the source span: `ba432e7c93f8f40e4ba5c6df2429c8cebd4fa5e9638ca7f74c2ae0c33e0ad7b2`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
