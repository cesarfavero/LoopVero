# `grokBotStoreAttachmentAliases`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `core/store/attachment-sources.ts` · [Module README](../../../../../modules/core/store/attachment-sources-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:764198-764217](../../../../../../reference/runtime/host-main.cjs#L764198-L764217) | `FunctionDeclaration` | yes | `args` |
| [evaluation:557566-557585](../../../../../../reference/runtime/sand-eval-runner.cjs#L557566-L557585) | `FunctionDeclaration` | yes | `args` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:764198-764217](../../../../../../reference/runtime/host-main.cjs#L764198-L764217) | 3 | 1 | 1 | 2 | 0 | 0 |
| [evaluation:557566-557585](../../../../../../reference/runtime/sand-eval-runner.cjs#L557566-L557585) | 3 | 1 | 1 | 2 | 0 | 0 |

### host:764198

Calls written directly in this body: `grokBotStoreAttachmentCandidateOf`, `resolved.push`, `sources.resolve`.

SHA-256 of the source span: `18b992150ad279cf664fd06506be7636cd97c58b2ce0ae3c576db991b9dd38f8`.

### evaluation:557566

Calls written directly in this body: `grokBotStoreAttachmentCandidateOf`, `resolved.push`, `sources.resolve`.

SHA-256 of the source span: `18b992150ad279cf664fd06506be7636cd97c58b2ce0ae3c576db991b9dd38f8`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
