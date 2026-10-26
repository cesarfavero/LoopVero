# `SharedDesktopSandBox.migrateLegacyPrimarySeat`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `core/box/shared-desktop-sand-box.ts` · [Module README](../../../../../modules/core/box/shared-desktop-sand-box-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:554778-554785](../../../../../../reference/runtime/host-main.cjs#L554778-L554785) | `method` | no | `agentId, assigned` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:554778-554785](../../../../../../reference/runtime/host-main.cjs#L554778-L554785) | 2 | 0 | 0 | 3 | 0 | 0 |

### host:554778

Calls written directly in this body: `isPrimaryWindowIndex`, `this.agentWindows.get`, `this.takeFreeForkIndex`.

SHA-256 of the source span: `cb157a87bda8c08f9f2244ae9561c155b1ae34aeff4cbd381e3543bc3bb7f7b3`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
