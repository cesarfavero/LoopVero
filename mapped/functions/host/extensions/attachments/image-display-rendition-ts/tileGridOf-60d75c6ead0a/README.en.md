# `tileGridOf`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/attachments/image-display-rendition.ts` · [Module README](../../../../../../modules/host/extensions/attachments/image-display-rendition-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:498139-498159](../../../../../../../reference/runtime/host-main.cjs#L498139-L498159) | `FunctionDeclaration` | no | `group, streams` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:498139-498159](../../../../../../../reference/runtime/host-main.cjs#L498139-L498159) | 4 | 1 | 0 | 5 | 0 | 0 |

### host:498139

Calls written directly in this body: `knownStreams.has`, `new Set`, `streams.map`, `tiles.push`.

SHA-256 of the source span: `398ca0f70440e9cf50e4cea9157cdc7a9e65c4a9b18e6d6d19a72207e667dcf7`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
