# `BoxSecretsApplier.stop`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/secrets/secrets-service.ts` · [Module README](../../../../../../modules/host/extensions/secrets/secrets-service-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:709214-709218](../../../../../../../reference/runtime/host-main.cjs#L709214-L709218) | `method` | no | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:709214-709218](../../../../../../../reference/runtime/host-main.cjs#L709214-L709218) | 0 | 0 | 0 | 0 | 0 | 0 |

### host:709214

Calls written directly in this body: `this.notifyApplied`, `this.stopSignal.abort`.

Assignment or increment targets: `this.isStopped`.

SHA-256 of the source span: `9be61760a035b689ac23629e432a869aca7fa039a6e1d028380bb1ea04864de4`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
