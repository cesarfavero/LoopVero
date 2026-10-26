# `SandWebhookCredentialService.ensureKey`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/automations/README.en.md).

**Module:** `host/extensions/automations/webhook-credential-service.ts` · [Module README](../../../../../../modules/host/extensions/automations/webhook-credential-service-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:505782-505794](../../../../../../../reference/runtime/host-main.cjs#L505782-L505794) | `method` | yes | `automationId` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:505782-505794](../../../../../../../reference/runtime/host-main.cjs#L505782-L505794) | 3 | 0 | 3 | 4 | 0 | 0 |

### host:505782

Calls written directly in this body: `.finally`, `this.inFlightMints.get`, `this.inFlightMints.set`, `this.loadKeys`, `this.mintAndPersist`.

SHA-256 of the source span: `96a1ee046c0fe0aff5165750d51487369442b3ab21e6d7d6c5c6d74b77cf811a`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
