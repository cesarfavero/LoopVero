# `SharedDesktopSandBox.agentWindowMcpHost`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `core/box/shared-desktop-sand-box.ts` · [Module README](../../../../../modules/core/box/shared-desktop-sand-box-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:555043-555070](../../../../../../reference/runtime/host-main.cjs#L555043-L555070) | `method` | yes | `ctx, agentId` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:555043-555070](../../../../../../reference/runtime/host-main.cjs#L555043-L555070) | 4 | 0 | 3 | 4 | 0 | 1 |

### host:555043

Calls written directly in this body: `errorLogTag`, `isPrimaryWindowIndex`, `reportHostDiagnostic`, `this.establishedForks.has`, `this.getAgentWindowIndex`, `this.inner.ensureWindow`, `this.reattachPersistedForkSeat`, `this.releaseAgentWindow`, `this.windowOptions`.

Assignment or increment targets: `window2`.

SHA-256 of the source span: `fa72ac5b7b7a0623c8cecc6ce9f2bd10c17a61c292992c1883d3f7e16b95f32b`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
