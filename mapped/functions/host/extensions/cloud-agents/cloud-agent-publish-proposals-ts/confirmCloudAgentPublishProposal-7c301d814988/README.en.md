# `confirmCloudAgentPublishProposal`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/cloud-agents/cloud-agent-publish-proposals.ts` · [Module README](../../../../../../modules/host/extensions/cloud-agents/cloud-agent-publish-proposals-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:537889-537921](../../../../../../../reference/runtime/host-main.cjs#L537889-L537921) | `FunctionDeclaration` | yes | `client, args` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:537889-537921](../../../../../../../reference/runtime/host-main.cjs#L537889-L537921) | 3 | 0 | 1 | 3 | 0 | 1 |

### host:537889

Calls written directly in this body: `client.confirmPublishProposal`, `new ConfirmPublishProposalRequest`, `refusalOf`, `toSandCloudAgentPublishProposal`, `toSandCloudAgentPublishState`, `visibilityToProto`.

SHA-256 of the source span: `dd8a0acc55608dc82132b989cd37cf00ef7c8ab3b4a5750a2b5fc4d8f8cd4ff5`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
