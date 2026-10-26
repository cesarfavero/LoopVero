# `SandWebhookCredentialService.getCredential`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/automations/README.en.md).

**Module:** `host/extensions/automations/webhook-credential-service.ts` · [Module README](../../../../../../modules/host/extensions/automations/webhook-credential-service-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:505818-505827](../../../../../../../reference/runtime/host-main.cjs#L505818-L505827) | `method` | yes | `{     agentId,     localId   }` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:505818-505827](../../../../../../../reference/runtime/host-main.cjs#L505818-L505827) | 0 | 0 | 1 | 1 | 0 | 0 |

### host:505818

Calls written directly in this body: `stableAutomationId`, `this.ensureKey`, `this.webhookUrl`.

SHA-256 of the source span: `7d67c14778df84a24a6d980f0bddba89b76b5f560e52a6f81c524f0ca1590f3d`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
