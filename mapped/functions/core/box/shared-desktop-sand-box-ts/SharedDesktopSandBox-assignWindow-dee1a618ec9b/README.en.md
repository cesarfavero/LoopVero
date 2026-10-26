# `SharedDesktopSandBox.assignWindow`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `core/box/shared-desktop-sand-box.ts` · [Module README](../../../../../modules/core/box/shared-desktop-sand-box-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:554773-554777](../../../../../../reference/runtime/host-main.cjs#L554773-L554777) | `method` | no | `agentId` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:554773-554777](../../../../../../reference/runtime/host-main.cjs#L554773-L554777) | 1 | 0 | 0 | 2 | 0 | 0 |

### host:554773

Calls written directly in this body: `this.agentWindows.get`, `this.takeFreeForkIndex`.

SHA-256 of the source span: `8cd5aeeab699795f830400fad73151fad28328d2433d5f09b3f967015abe5951`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
