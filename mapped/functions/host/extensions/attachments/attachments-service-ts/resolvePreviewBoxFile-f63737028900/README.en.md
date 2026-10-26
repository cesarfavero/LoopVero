# `resolvePreviewBoxFile`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/attachments/attachments-service.ts` · [Module README](../../../../../../modules/host/extensions/attachments/attachments-service-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:499021-499040](../../../../../../../reference/runtime/host-main.cjs#L499021-L499040) | `FunctionDeclaration` | yes | `filePath` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:499021-499040](../../../../../../../reference/runtime/host-main.cjs#L499021-L499040) | 3 | 0 | 2 | 6 | 0 | 2 |

### host:499021

Calls written directly in this body: `import_node_fs43.promises.realpath`, `import_node_fs43.promises.stat`, `lexicalBoxFilePath`, `reanchorHostPath`, `reportFallbackUnlessAbsent`, `resolvedBoxFilePath`, `stat26.isFile`.

Assignment or increment targets: `real`.

SHA-256 of the source span: `75eb709bb620bb2b509e4c41a5217d0270688bc9bf60887689063ffa13a5d573`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
