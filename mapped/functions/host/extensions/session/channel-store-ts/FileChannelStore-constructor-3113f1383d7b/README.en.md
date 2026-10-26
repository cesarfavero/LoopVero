# `FileChannelStore.constructor`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/session/channel-store.ts` · [Module README](../../../../../../modules/host/extensions/session/channel-store-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:721256-721266](../../../../../../../reference/runtime/host-main.cjs#L721256-L721266) | `method` | no | `channelsDir, stat26 = import_node_fs85.statSync` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:721256-721266](../../../../../../../reference/runtime/host-main.cjs#L721256-L721266) | 0 | 0 | 0 | 0 | 0 | 0 |

### host:721256

Calls written directly in this body: `createDebouncePolicy`, `new WatchedDirectory`.

Assignment or increment targets: `this.channelsDir`, `this.dir`, `this.stat`.

SHA-256 of the source span: `f00d77fcb01b4cbe939af2476fa7cdd3141e5c74c486517eafcb5d728c1ed441`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
