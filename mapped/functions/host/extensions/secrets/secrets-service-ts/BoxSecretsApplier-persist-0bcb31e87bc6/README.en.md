# `BoxSecretsApplier.persist`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/secrets/secrets-service.ts` · [Module README](../../../../../../modules/host/extensions/secrets/secrets-service-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:709286-709307](../../../../../../../reference/runtime/host-main.cjs#L709286-L709307) | `method` | yes | `desired, generation` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:709286-709307](../../../../../../../reference/runtime/host-main.cjs#L709286-L709307) | 2 | 0 | 1 | 0 | 1 | 1 |

### host:709286

Calls written directly in this body: `Buffer.from`, `JSON.stringify`, `hostNoFollowRoot`, `this.log`, `writeFileAtomic`.

Explicit throw targets: `error64`.

SHA-256 of the source span: `66ebee4902ba6d9ccc9f3c512e2d26b6278e974ae629857e3f9bfd545b377e56`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
