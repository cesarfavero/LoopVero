# `StructuredLogTransport.setIdentityTags`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `shared/observability/structured-log-transport.ts` · [Module README](../../../../../modules/shared/observability/structured-log-transport-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:452988-452991](../../../../../../reference/runtime/host-main.cjs#L452988-L452991) | `method` | no | `tags` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:452988-452991](../../../../../../reference/runtime/host-main.cjs#L452988-L452991) | 0 | 0 | 0 | 0 | 0 | 0 |

### host:452988

Calls written directly in this body: `this.releaseIdentityHold`.

Assignment or increment targets: `this.identityTags`.

SHA-256 of the source span: `40908e0dd3dd452402742302decdb6a2bbbe13b94dd95761cdcfac8ae0a37cd3`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
