# `BoxSecretsApplier.syncUserSecrets`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/secrets/secrets-service.ts` · [Module README](../../../../../../modules/host/extensions/secrets/secrets-service-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:709099-709126](../../../../../../../reference/runtime/host-main.cjs#L709099-L709126) | `method` | yes | `ctx, request5` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:709099-709126](../../../../../../../reference/runtime/host-main.cjs#L709099-L709126) | 6 | 0 | 3 | 3 | 0 | 0 |

### host:709099

Calls written directly in this body: `this.loadPersisted`, `this.syncUserSecrets`, `this.tryReplaceDesired`.

SHA-256 of the source span: `699186ee02e17ceec6fc2a09386c7981b7f8e207eecee7b0013f3db21492ec46`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
