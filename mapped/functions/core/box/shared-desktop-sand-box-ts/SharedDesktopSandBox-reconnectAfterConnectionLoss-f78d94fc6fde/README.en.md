# `SharedDesktopSandBox.reconnectAfterConnectionLoss`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `core/box/shared-desktop-sand-box.ts` · [Module README](../../../../../modules/core/box/shared-desktop-sand-box-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:555004-555006](../../../../../../reference/runtime/host-main.cjs#L555004-L555006) | `method` | yes | `ctx, lost` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:555004-555006](../../../../../../reference/runtime/host-main.cjs#L555004-L555006) | 0 | 0 | 1 | 1 | 0 | 0 |

### host:555004

Calls written directly in this body: `this.inner.reconnectAfterConnectionLoss`.

SHA-256 of the source span: `bd6d11080bba1de735f9a588a8d8ef4ff9efdadfd950ffc2a5c17362903b4135`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
