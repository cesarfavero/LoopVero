# `SharedDesktopSandBox.withoutDeletedAgentSeat`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `core/box/shared-desktop-sand-box.ts` · [Module README](../../../../../modules/core/box/shared-desktop-sand-box-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:554820-554823](../../../../../../reference/runtime/host-main.cjs#L554820-L554823) | `method` | yes | `ctx, agentId, primary` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:554820-554823](../../../../../../reference/runtime/host-main.cjs#L554820-L554823) | 0 | 0 | 2 | 1 | 0 | 0 |

### host:554820

Calls written directly in this body: `this.gateComputerUse`, `this.inner.ensureReady`, `this.releaseAgentWindow`.

SHA-256 of the source span: `06fcbb95998927d410264af1eb22eadc6427af84468c8372d5883ab013f104cf`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
