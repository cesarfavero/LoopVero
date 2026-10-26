# `FileChannelStore.listConnections`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/session/channel-store.ts` · [Module README](../../../../../../modules/host/extensions/session/channel-store-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:721295-721297](../../../../../../../reference/runtime/host-main.cjs#L721295-L721297) | `method` | no | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:721295-721297](../../../../../../../reference/runtime/host-main.cjs#L721295-L721297) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:721295

Calls written directly in this body: `.filter`, `.flatMap`, `this.dir.listSubdirectoryNames`.

SHA-256 of the source span: `aa489d15ce44f051a5e0f95b137fe85b625629d33611cd25eca97f5e6cfb46ca`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
