# `SandWebhookCredentialService.mintAndPersist`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/automations/README.en.md).

**Module:** `host/extensions/automations/webhook-credential-service.ts` · [Module README](../../../../../../modules/host/extensions/automations/webhook-credential-service-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:505864-505885](../../../../../../../reference/runtime/host-main.cjs#L505864-L505885) | `method` | yes | `automationId, keys` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:505864-505885](../../../../../../../reference/runtime/host-main.cjs#L505864-L505885) | 0 | 0 | 2 | 3 | 0 | 2 |

### host:505864

Calls written directly in this body: `errorLogTag`, `new CreateAutomationWebhookApiKeyRequest`, `this.deps.client.createAutomationWebhookApiKey`, `this.log`, `this.writes.enqueue`.

Assignment or increment targets: `key`.

SHA-256 of the source span: `92489b779d2cea6e8ee6c5896ba50b2e040ed8eb61fbec29e83d80430d50f5c8`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
