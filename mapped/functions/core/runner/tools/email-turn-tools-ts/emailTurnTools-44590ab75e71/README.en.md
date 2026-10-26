# `emailTurnTools`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/email-turn-tools.ts` · [Module README](../../../../../../modules/core/runner/tools/email-turn-tools-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:765228-765305](../../../../../../../reference/runtime/host-main.cjs#L765228-L765305) | `FunctionDeclaration` | no | `host, decisions, review, recordDelivery` |
| [evaluation:558596-558673](../../../../../../../reference/runtime/sand-eval-runner.cjs#L558596-L558673) | `FunctionDeclaration` | no | `host, decisions, review, recordDelivery` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:765228-765305](../../../../../../../reference/runtime/host-main.cjs#L765228-L765305) | 6 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:558596-558673](../../../../../../../reference/runtime/sand-eval-runner.cjs#L558596-L558673) | 6 | 0 | 0 | 2 | 0 | 0 |

### host:765228

Calls written directly in this body: `createCheckEmailInboxAvailabilityTool`, `createClaimEmailInboxTool`, `createListEmailInboxesTool`, `createReadEmailAttachmentTool`, `createReadEmailThreadTool`, `createSearchEmailThreadsTool`, `createSendEmailTool`, `decisions.offers`, `host.gates.agentEmailDrafts`, `host.gates.agentEmailMultipleInboxes`, `tools.push`.

SHA-256 of the source span: `635bc4c63d2aef3fa0b04c34bfe78026a2857155a8926d67562959161d95ed12`.

### evaluation:558596

Calls written directly in this body: `createCheckEmailInboxAvailabilityTool`, `createClaimEmailInboxTool`, `createListEmailInboxesTool`, `createReadEmailAttachmentTool`, `createReadEmailThreadTool`, `createSearchEmailThreadsTool`, `createSendEmailTool`, `decisions.offers`, `host.gates.agentEmailDrafts`, `host.gates.agentEmailMultipleInboxes`, `tools.push`.

SHA-256 of the source span: `635bc4c63d2aef3fa0b04c34bfe78026a2857155a8926d67562959161d95ed12`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
