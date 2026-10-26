# `SharedDesktopSandBox.windowOptions`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `core/box/shared-desktop-sand-box.ts` · [Module README](../../../../../modules/core/box/shared-desktop-sand-box-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:554799-554808](../../../../../../reference/runtime/host-main.cjs#L554799-L554808) | `method` | no | `agentId, opts = {}` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:554799-554808](../../../../../../reference/runtime/host-main.cjs#L554799-L554808) | 2 | 0 | 0 | 1 | 0 | 0 |

### host:554799

Calls written directly in this body: `this.agentWindowTokens.get`, `this.seatTableOption`, `this.unstartedSeats.has`, `this.unstartedTokens.has`.

SHA-256 of the source span: `f75aa39fe3a0aee0d7dc446f959a8588eb99eba0106d5883f1e85eb6124c4fa0`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
