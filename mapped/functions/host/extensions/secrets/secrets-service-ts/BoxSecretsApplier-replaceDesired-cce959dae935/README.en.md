# `BoxSecretsApplier.replaceDesired`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/secrets/secrets-service.ts` · [Module README](../../../../../../modules/host/extensions/secrets/secrets-service-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:709127-709130](../../../../../../../reference/runtime/host-main.cjs#L709127-L709130) | `method` | yes | `ctx, next` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:709127-709130](../../../../../../../reference/runtime/host-main.cjs#L709127-L709130) | 1 | 0 | 1 | 1 | 0 | 0 |

### host:709127

Calls written directly in this body: `this.getStatus`, `this.tryReplaceDesired`.

SHA-256 of the source span: `096a8ae6d0c5ea0a48241a4bc974f7ce56cb7ec4d4eef2cbc5caee898e1242ef`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
