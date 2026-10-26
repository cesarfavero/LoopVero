# `SharedDesktopSandBox.dropCachedSeat`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `core/box/shared-desktop-sand-box.ts` · [Module README](../../../../../modules/core/box/shared-desktop-sand-box-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:554598-554604](../../../../../../reference/runtime/host-main.cjs#L554598-L554604) | `method` | no | `agentId` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:554598-554604](../../../../../../reference/runtime/host-main.cjs#L554598-L554604) | 0 | 0 | 0 | 0 | 0 | 0 |

### host:554598

Calls written directly in this body: `this.agentWindowTokens.delete`, `this.agentWindows.delete`, `this.downForks.delete`, `this.establishedForks.delete`, `this.unstartedSeats.delete`.

SHA-256 of the source span: `0fb427079485def8f0ebcf2c070d7c4f04007ec4351ea824c21a924fb9a964f5`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
