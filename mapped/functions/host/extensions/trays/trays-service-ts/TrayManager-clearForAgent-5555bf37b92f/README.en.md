# `TrayManager.clearForAgent`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/trays/trays-service.ts` · [Module README](../../../../../../modules/host/extensions/trays/trays-service-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:784528-784537](../../../../../../../reference/runtime/host-main.cjs#L784528-L784537) | `method` | no | `agentId` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:784528-784537](../../../../../../../reference/runtime/host-main.cjs#L784528-L784537) | 1 | 1 | 0 | 1 | 0 | 0 |

### host:784528

Calls written directly in this body: `this.activitySeqByTrayId.delete`, `this.emit`, `this.trays.filter`.

Assignment or increment targets: `this.trays`.

SHA-256 of the source span: `7c40ed5d78f2547e79daa0c0181269f9eabd5a08de2060e6f3a0da38588c0d75`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
