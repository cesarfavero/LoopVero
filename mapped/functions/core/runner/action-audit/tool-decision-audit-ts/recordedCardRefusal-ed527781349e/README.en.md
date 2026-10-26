# `recordedCardRefusal`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/action-audit/tool-decision-audit.ts` · [Module README](../../../../../../modules/core/runner/action-audit/tool-decision-audit-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:699225-699237](../../../../../../../reference/runtime/host-main.cjs#L699225-L699237) | `FunctionDeclaration` | no | `audit, controller, {   reviewCallId: reviewCallId2,   ...query2 }` |
| [evaluation:489957-489969](../../../../../../../reference/runtime/sand-eval-runner.cjs#L489957-L489969) | `FunctionDeclaration` | no | `audit, controller, {   reviewCallId: reviewCallId2,   ...query2 }` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:699225-699237](../../../../../../../reference/runtime/host-main.cjs#L699225-L699237) | 1 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:489957-489969](../../../../../../../reference/runtime/sand-eval-runner.cjs#L489957-L489969) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:699225

Calls written directly in this body: `audit.decide`, `controller.cardReasonFor`.

SHA-256 of the source span: `4747ce10bde09c1a83df6dad2059266cecc9a131420fcf29d55912a5cf0de5b3`.

### evaluation:489957

Calls written directly in this body: `audit.decide`, `controller.cardReasonFor`.

SHA-256 of the source span: `4747ce10bde09c1a83df6dad2059266cecc9a131420fcf29d55912a5cf0de5b3`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
