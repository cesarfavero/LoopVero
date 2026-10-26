# `SharedDesktopSandBox.assignOrReclaimWindow`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `core/box/shared-desktop-sand-box.ts` · [Module README](../../../../../modules/core/box/shared-desktop-sand-box-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:554767-554772](../../../../../../reference/runtime/host-main.cjs#L554767-L554772) | `method` | yes | `ctx, agentId` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:554767-554772](../../../../../../reference/runtime/host-main.cjs#L554767-L554772) | 1 | 0 | 1 | 2 | 0 | 0 |

### host:554767

Calls written directly in this body: `this.assignWindow`, `this.reclaimSeatsWhenFull`.

SHA-256 of the source span: `ed6656d2f0583702098f03e3f7ffeb63e99434a265bd505b63ee1c0649cf6637`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
