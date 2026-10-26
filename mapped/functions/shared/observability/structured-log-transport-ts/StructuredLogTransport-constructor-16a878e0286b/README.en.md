# `StructuredLogTransport.constructor`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `shared/observability/structured-log-transport.ts` · [Module README](../../../../../modules/shared/observability/structured-log-transport-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:452952-452966](../../../../../../reference/runtime/host-main.cjs#L452952-L452966) | `method` | no | `options2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:452952-452966](../../../../../../reference/runtime/host-main.cjs#L452952-L452966) | 2 | 0 | 0 | 0 | 0 | 0 |

### host:452952

Calls written directly in this body: `.slice`, `cloneDropCounters`, `createDropCounterId`, `emptyDropCounters`, `options2.identityHoldExpiry.arm`, `this.ensurePolling`.

Assignment or increment targets: `this.buffer`, `this.dropCounterId`, `this.dropCounters`, `this.flushHeldForIdentity`, `this.identityHoldHandle`, `this.options`, `this.platformTags`.

SHA-256 of the source span: `b8c8bfebbf6dc2913a80dc83a8177bde58d05611d67ef9c24f4966757fa18f38`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
