# `BoxSecretsApplier.tryReplaceDesired`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/secrets/secrets-service.ts` · [Module README](../../../../../../modules/host/extensions/secrets/secrets-service-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:709131-709155](../../../../../../../reference/runtime/host-main.cjs#L709131-L709155) | `method` | yes | `ctx, next, expectedGeneration` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:709131-709155](../../../../../../../reference/runtime/host-main.cjs#L709131-L709155) | 5 | 0 | 3 | 2 | 1 | 0 |

### host:709131

Calls written directly in this body: `.catch`, `.then`, `effectiveBoxSecrets`, `new SandBoxSecretsValidationError`, `next`, `this.applyDeadline.run`, `this.applyPersisted`, `this.getStatus`, `this.loadDesired`, `this.persistQueue.catch`, `this.runApplyLoop`, `validateBoxSecrets`.

Assignment or increment targets: `this.desired`, `this.desiredGeneration`, `this.persistQueue`.

Explicit throw targets: `SandBoxSecretsValidationError`.

SHA-256 of the source span: `26f45133ee861cfc743b1a527b67a007974c9dff16b11cd1cb0222354d02b07f`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
