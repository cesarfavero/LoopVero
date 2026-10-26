# `TrayManager.clearAll`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/trays/trays-service.ts` · [Module README](../../../../../../modules/host/extensions/trays/trays-service-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:784514-784519](../../../../../../../reference/runtime/host-main.cjs#L784514-L784519) | `method` | no | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:784514-784519](../../../../../../../reference/runtime/host-main.cjs#L784514-L784519) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:784514

Calls written directly in this body: `this.activitySeqByTrayId.clear`, `this.emit`.

Assignment or increment targets: `this.trays`.

SHA-256 of the source span: `578dc35b1a971491dded03e7abf96c7e3d03ffd2608c72b113b56734700b784f`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
