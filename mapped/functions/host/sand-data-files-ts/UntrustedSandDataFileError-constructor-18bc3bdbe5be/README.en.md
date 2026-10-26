# `UntrustedSandDataFileError.constructor`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/architecture/README.en.md).

**Module:** `host/sand-data-files.ts` · [Module README](../../../../modules/host/sand-data-files-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:453717-453721](../../../../../reference/runtime/host-main.cjs#L453717-L453721) | `method` | no | `reason, path33` |
| [state-worker:476-480](../../../../../reference/runtime/workers/state/agent-store-worker.cjs#L476-L480) | `method` | no | `reason, path` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:453717-453721](../../../../../reference/runtime/host-main.cjs#L453717-L453721) | 0 | 0 | 0 | 0 | 0 | 0 |
| [state-worker:476-480](../../../../../reference/runtime/workers/state/agent-store-worker.cjs#L476-L480) | 0 | 0 | 0 | 0 | 0 | 0 |

### host:453717

Calls written directly in this body: `super`.

Assignment or increment targets: `this.path`, `this.reason`.

SHA-256 of the source span: `6b475aca57629e6adac7b7c28ae09337b0cb0f323b0f020c6349f20241de818b`.

### state-worker:476

Calls written directly in this body: `super`.

Assignment or increment targets: `this.path`, `this.reason`.

SHA-256 of the source span: `89c0e5056f8700fe6611fbc62305a7042036b61ed22c09640a5cedd1ca45bdcf`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
