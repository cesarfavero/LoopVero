# `refuseUnlessAgentOnHost`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/attachments/attachments-service.ts` · [Module README](../../../../../../modules/host/extensions/attachments/attachments-service-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:498561-498564](../../../../../../../reference/runtime/host-main.cjs#L498561-L498564) | `FunctionDeclaration` | yes | `agentId` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:498561-498564](../../../../../../../reference/runtime/host-main.cjs#L498561-L498564) | 1 | 0 | 1 | 1 | 1 | 0 |

### host:498561

Calls written directly in this body: `isAgentOnHost`, `new SandAttachmentAgentNotOpenError`.

Explicit throw targets: `SandAttachmentAgentNotOpenError`.

SHA-256 of the source span: `4023e73569126e89b1aaec0bcfaf19ab257b6268570ddfe140376de3875be13b`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
