# `SharedDesktopSandBox.windowStillOwned`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `core/box/shared-desktop-sand-box.ts` · [Module README](../../../../../modules/core/box/shared-desktop-sand-box-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:554871-554882](../../../../../../reference/runtime/host-main.cjs#L554871-L554882) | `method` | yes | `ctx, windowIndex, ownerToken` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:554871-554882](../../../../../../reference/runtime/host-main.cjs#L554871-L554882) | 1 | 0 | 1 | 3 | 0 | 1 |

### host:554871

Calls written directly in this body: `errorLogTag`, `reportHostDiagnosticOrStderr`, `this.inner.windowOwnedBy`.

SHA-256 of the source span: `fb1b1be82fd5603826b27ff2f87bc48cfaa6dda46186b10bfe282da564efa7c7`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
