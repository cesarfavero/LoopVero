# `start/getWebhookCredential`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/automations/README.en.md).

**Module:** `host/extensions/automations/extension.ts` · [Module README](../../../../../../modules/host/extensions/automations/extension-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:506002-506008](../../../../../../../reference/runtime/host-main.cjs#L506002-L506008) | `ArrowFunctionExpression` | yes | `{ agentId, localId }` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:506002-506008](../../../../../../../reference/runtime/host-main.cjs#L506002-L506008) | 0 | 0 | 1 | 1 | 0 | 0 |

### host:506002

Calls written directly in this body: `.find`, `assertWebhookCredentialTarget`, `credentialService.getCredential`, `transcript.getAgentAutomations`.

SHA-256 of the source span: `c18d14ba7286f528287a349e0a7b122bef1e78c1ae5e3e7baa26a3d752f23e10`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
