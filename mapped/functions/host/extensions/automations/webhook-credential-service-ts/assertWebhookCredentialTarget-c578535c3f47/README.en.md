# `assertWebhookCredentialTarget`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/automations/README.en.md).

**Module:** `host/extensions/automations/webhook-credential-service.ts` · [Module README](../../../../../../modules/host/extensions/automations/webhook-credential-service-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:505755-505762](../../../../../../../reference/runtime/host-main.cjs#L505755-L505762) | `FunctionDeclaration` | no | `automation, localId` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:505755-505762](../../../../../../../reference/runtime/host-main.cjs#L505755-L505762) | 2 | 0 | 0 | 0 | 2 | 0 |

### host:505755

Calls written directly in this body: `.some`, `new SandWebhookCredentialTargetError`, `triggerList`.

Explicit throw targets: `SandWebhookCredentialTargetError`.

SHA-256 of the source span: `3d1bb7abd7d0708c2a5b36e94d492781430cf3c37c3488ee10003a96bf40dd89`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
