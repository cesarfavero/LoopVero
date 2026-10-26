# `ManagedSetupService.dispose`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/managed-setup/managed-setup-service.ts` · [Module README](../../../../../../modules/host/extensions/managed-setup/managed-setup-service-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:683504-683512](../../../../../../../reference/runtime/host-main.cjs#L683504-L683512) | `method` | no | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:683504-683512](../../../../../../../reference/runtime/host-main.cjs#L683504-L683512) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:683504

Calls written directly in this body: `this.abort.abort`, `this.pollingHandle.dispose`.

Assignment or increment targets: `this.pollingHandle`, `this.refreshForceQueued`, `this.refreshQueued`, `this.stopped`.

SHA-256 of the source span: `71d1aac4f314c4ada7e389a726e988386b974cad60bb5794d838182f78535634`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
