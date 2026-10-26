# `resolveChannelAttachment`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `host/connectors/channel-attachment.ts` · [Module README](../../../../../modules/host/connectors/channel-attachment-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:497804-497839](../../../../../../reference/runtime/host-main.cjs#L497804-L497839) | `FunctionDeclaration` | yes | `rawUrl` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:497804-497839](../../../../../../reference/runtime/host-main.cjs#L497804-L497839) | 5 | 0 | 2 | 8 | 0 | 2 |

### host:497804

Calls written directly in this body: `imageMimeFromPath`, `import_node_fs39.promises.readFile`, `import_node_fs39.promises.stat`, `new Uint8Array`, `reanchorSandPath`, `reportFallbackUnlessAbsent`, `stat26.isFile`, `toLocalPath`, `tryParseUrl`, `urlLooksLikeImage`, `videoMimeFromPath`.

Assignment or increment targets: `data2`, `size`.

SHA-256 of the source span: `97d50a56370f6ded40d4bd14a0fe9d399fcb1c65c1c1ef8a5c6567bfef4aa897`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
