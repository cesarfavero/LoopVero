# `BoxSecretsApplier.applyPersisted`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/secrets/secrets-service.ts` · [Module README](../../../../../../modules/host/extensions/secrets/secrets-service-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:709168-709177](../../../../../../../reference/runtime/host-main.cjs#L709168-L709177) | `method` | yes | `ctx` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:709168-709177](../../../../../../../reference/runtime/host-main.cjs#L709168-L709177) | 0 | 0 | 1 | 0 | 0 | 0 |

### host:709168

Calls written directly in this body: `apply.then`, `this.applyPersistedOnce`.

Assignment or increment targets: `this.persistedApply`.

SHA-256 of the source span: `41f9bea52179e808c46d7fb3bc866f34031dedbbb89e2915932b1839a849ef5a`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
