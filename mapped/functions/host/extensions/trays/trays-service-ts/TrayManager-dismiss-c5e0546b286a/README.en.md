# `TrayManager.dismiss`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/trays/trays-service.ts` · [Module README](../../../../../../modules/host/extensions/trays/trays-service-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:784520-784527](../../../../../../../reference/runtime/host-main.cjs#L784520-L784527) | `method` | no | `id` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:784520-784527](../../../../../../../reference/runtime/host-main.cjs#L784520-L784527) | 1 | 0 | 0 | 2 | 0 | 0 |

### host:784520

Calls written directly in this body: `this.activitySeqByTrayId.delete`, `this.emit`, `this.trays.filter`.

Assignment or increment targets: `this.trays`.

SHA-256 of the source span: `c873c050c1d8905f296e7eca5966b7c2c08105bd2cc2aa9f730886a9de0a289d`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
