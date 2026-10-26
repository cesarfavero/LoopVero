# `SharedDesktopSandBox.followCurrentSeatTable`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `core/box/shared-desktop-sand-box.ts` · [Module README](../../../../../modules/core/box/shared-desktop-sand-box-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:554454-554460](../../../../../../reference/runtime/host-main.cjs#L554454-L554460) | `method` | yes | `ctx` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:554454-554460](../../../../../../reference/runtime/host-main.cjs#L554454-L554460) | 2 | 0 | 1 | 3 | 0 | 0 |

### host:554454

Calls written directly in this body: `this.followPersistedTable`, `this.readCurrentSeatTable`.

SHA-256 of the source span: `db8f31d94b5f10dffcfd0d1b86779f0f4b81b50b1e77eceeadc248c8c44c636e`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
