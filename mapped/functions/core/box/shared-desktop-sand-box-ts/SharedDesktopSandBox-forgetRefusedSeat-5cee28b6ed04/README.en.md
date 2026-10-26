# `SharedDesktopSandBox.forgetRefusedSeat`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `core/box/shared-desktop-sand-box.ts` · [Module README](../../../../../modules/core/box/shared-desktop-sand-box-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:554824-554835](../../../../../../reference/runtime/host-main.cjs#L554824-L554835) | `method` | no | `ctx, agentId, windowIndex, refusal4` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:554824-554835](../../../../../../reference/runtime/host-main.cjs#L554824-L554835) | 2 | 0 | 0 | 2 | 0 | 0 |

### host:554824

Calls written directly in this body: `reportHostDiagnostic`, `this.agentWindowTokens.get`, `this.agentWindows.get`, `this.dropCachedSeat`, `this.queueSeatChanges`, `this.refusedForkWindows.add`.

SHA-256 of the source span: `08ece97b3362a5ec595abc07f148ec39d7339b3910341e4f436455e195f314e9`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
