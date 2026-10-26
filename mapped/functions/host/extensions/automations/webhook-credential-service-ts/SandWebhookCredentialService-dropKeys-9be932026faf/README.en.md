# `SandWebhookCredentialService.dropKeys`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/automations/README.en.md).

**Module:** `host/extensions/automations/webhook-credential-service.ts` · [Module README](../../../../../../modules/host/extensions/automations/webhook-credential-service-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:505795-505817](../../../../../../../reference/runtime/host-main.cjs#L505795-L505817) | `method` | yes | `automationIds` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:505795-505817](../../../../../../../reference/runtime/host-main.cjs#L505795-L505817) | 1 | 0 | 3 | 1 | 0 | 1 |

### host:505795

Calls written directly in this body: `Promise.all`, `automationIds.flatMap`, `automationIds.join`, `errorLogTag`, `this.loadKeys`, `this.log`, `this.writes.enqueue`.

SHA-256 of the source span: `e75ed1778b4b152d1d25a4e8c1bad46542e139496e43f6cd84d626c1d4613f0d`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
