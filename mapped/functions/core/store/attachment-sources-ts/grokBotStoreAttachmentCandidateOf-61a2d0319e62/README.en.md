# `grokBotStoreAttachmentCandidateOf`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `core/store/attachment-sources.ts` · [Module README](../../../../../modules/core/store/attachment-sources-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:764190-764197](../../../../../../reference/runtime/host-main.cjs#L764190-L764197) | `FunctionDeclaration` | no | `path33` |
| [evaluation:557558-557565](../../../../../../reference/runtime/sand-eval-runner.cjs#L557558-L557565) | `FunctionDeclaration` | no | `path33` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:764190-764197](../../../../../../reference/runtime/host-main.cjs#L764190-L764197) | 3 | 0 | 0 | 3 | 0 | 0 |
| [evaluation:557558-557565](../../../../../../reference/runtime/sand-eval-runner.cjs#L557558-L557565) | 3 | 0 | 0 | 3 | 0 | 0 |

### host:764190

Calls written directly in this body: `barePathOf2`, `parseGrokBotAttachmentAlias`, `parseGrokBotAttachmentMountedFusePath`.

SHA-256 of the source span: `75780d4f10e0c06f517d04be8bf68b82ef92c0077ba591ee58088f636c50891a`.

### evaluation:557558

Calls written directly in this body: `barePathOf2`, `parseGrokBotAttachmentAlias`, `parseGrokBotAttachmentMountedFusePath`.

SHA-256 of the source span: `75780d4f10e0c06f517d04be8bf68b82ef92c0077ba591ee58088f636c50891a`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
