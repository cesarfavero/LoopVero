# `ToolTargetLedger.take`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/action-audit/tool-result-audit.ts` · [Module README](../../../../../../modules/core/runner/action-audit/tool-result-audit-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:489757-489761](../../../../../../../reference/runtime/sand-eval-runner.cjs#L489757-L489761) | `method` | no | `toolCallId` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:489757-489761](../../../../../../../reference/runtime/sand-eval-runner.cjs#L489757-L489761) | 0 | 0 | 0 | 1 | 0 | 0 |

### evaluation:489757

Calls written directly in this body: `this.hosts.delete`, `this.hosts.get`.

SHA-256 of the source span: `4bc55b78a17772b7d4565bd0b1e70fddb660dba78dbdfcf4006a0dc25b5d0906`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
