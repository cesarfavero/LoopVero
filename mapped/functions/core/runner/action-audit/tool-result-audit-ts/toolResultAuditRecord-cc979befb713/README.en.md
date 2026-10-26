# `toolResultAuditRecord`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/action-audit/tool-result-audit.ts` · [Module README](../../../../../../modules/core/runner/action-audit/tool-result-audit-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:489711-489725](../../../../../../../reference/runtime/sand-eval-runner.cjs#L489711-L489725) | `FunctionDeclaration` | no | `event, identity2, targetHost` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:489711-489725](../../../../../../../reference/runtime/sand-eval-runner.cjs#L489711-L489725) | 4 | 0 | 0 | 2 | 0 | 0 |

### evaluation:489711

Calls written directly in this body: `Math.max`, `event.toolIdentifier.toLowerCase`, `toolCallAuditEnvelope`, `toolResultOutcome`.

SHA-256 of the source span: `28a10b3531cbb667ebd901490b0b085f4171d18cec14740cb7a95cb1f5da46c1`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
