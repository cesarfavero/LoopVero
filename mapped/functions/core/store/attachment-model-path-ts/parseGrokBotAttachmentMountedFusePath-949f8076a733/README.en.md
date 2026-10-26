# `parseGrokBotAttachmentMountedFusePath`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `core/store/attachment-model-path.ts` · [Module README](../../../../../modules/core/store/attachment-model-path-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:752295-752304](../../../../../../reference/runtime/host-main.cjs#L752295-L752304) | `FunctionDeclaration` | no | `path33` |
| [evaluation:530373-530382](../../../../../../reference/runtime/sand-eval-runner.cjs#L530373-L530382) | `FunctionDeclaration` | no | `path33` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:752295-752304](../../../../../../reference/runtime/host-main.cjs#L752295-L752304) | 4 | 0 | 0 | 4 | 0 | 0 |
| [evaluation:530373-530382](../../../../../../reference/runtime/sand-eval-runner.cjs#L530373-L530382) | 4 | 0 | 0 | 4 | 0 | 0 |

### host:752295

Calls written directly in this body: `parseGrokBotAttachmentMountPath`, `parseGrokBotAttachmentRelPath`, `path33.indexOf`, `path33.slice`, `path33.startsWith`.

SHA-256 of the source span: `712f751e1a75fb97d0eafaca8fc074c81e12daa94dbbcc79baf54cde2800955e`.

### evaluation:530373

Calls written directly in this body: `parseGrokBotAttachmentMountPath`, `parseGrokBotAttachmentRelPath`, `path33.indexOf`, `path33.slice`, `path33.startsWith`.

SHA-256 of the source span: `712f751e1a75fb97d0eafaca8fc074c81e12daa94dbbcc79baf54cde2800955e`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
