# `SandWebhookCredentialService.writeStore`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/automations/README.en.md).

**Module:** `host/extensions/automations/webhook-credential-service.ts` · [Module README](../../../../../../modules/host/extensions/automations/webhook-credential-service-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:505886-505891](../../../../../../../reference/runtime/host-main.cjs#L505886-L505891) | `method` | yes | `keys` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:505886-505891](../../../../../../../reference/runtime/host-main.cjs#L505886-L505891) | 0 | 0 | 1 | 0 | 0 | 0 |

### host:505886

Calls written directly in this body: `Buffer.from`, `JSON.stringify`, `hostNoFollowRoot`, `writeFileAtomic`.

SHA-256 of the source span: `9260e813fa315261a18791f03f1d5abe9f3857ab79392038fded28dee0b5c843`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
