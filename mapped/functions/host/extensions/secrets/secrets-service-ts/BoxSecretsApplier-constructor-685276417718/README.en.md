# `BoxSecretsApplier.constructor`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/secrets/secrets-service.ts` · [Module README](../../../../../../modules/host/extensions/secrets/secrets-service-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:709082-709088](../../../../../../../reference/runtime/host-main.cjs#L709082-L709088) | `method` | no | `options2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:709082-709088](../../../../../../../reference/runtime/host-main.cjs#L709082-L709088) | 0 | 0 | 0 | 0 | 0 | 0 |

### host:709082

Calls written directly in this body: `getBoxSecretsStorePath`.

Assignment or increment targets: `this.applyDeadline`, `this.applyToBox`, `this.log`, `this.retryPolicy`, `this.storePath`.

SHA-256 of the source span: `a7514df0f07a35c66a4f6c744b864d5c8ead53576c1cef4f13b5d8d81bb50aae`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
