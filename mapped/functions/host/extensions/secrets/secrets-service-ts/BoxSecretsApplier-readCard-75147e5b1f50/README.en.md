# `BoxSecretsApplier.readCard`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/secrets/secrets-service.ts` · [Module README](../../../../../../modules/host/extensions/secrets/secrets-service-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:709206-709213](../../../../../../../reference/runtime/host-main.cjs#L709206-L709213) | `method` | yes | `names3` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:709206-709213](../../../../../../../reference/runtime/host-main.cjs#L709206-L709213) | 2 | 1 | 1 | 1 | 0 | 0 |

### host:709206

Calls written directly in this body: `Object.hasOwn`, `new Map`, `this.loadPersisted`, `values.set`.

SHA-256 of the source span: `bda3de321fb76383ef143dc74a5343b9229d5b7d208dbfc418a4b7cece480d9c`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
