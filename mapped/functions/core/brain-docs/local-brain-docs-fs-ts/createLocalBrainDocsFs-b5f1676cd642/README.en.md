# `createLocalBrainDocsFs`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `core/brain-docs/local-brain-docs-fs.ts` · [Module README](../../../../../modules/core/brain-docs/local-brain-docs-fs-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:784720-784790](../../../../../../reference/runtime/host-main.cjs#L784720-L784790) | `FunctionDeclaration` | no | `io2 = nodeLocalBrainDocsIo` |
| [evaluation:630117-630187](../../../../../../reference/runtime/sand-eval-runner.cjs#L630117-L630187) | `FunctionDeclaration` | no | `io2 = nodeLocalBrainDocsIo` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:784720-784790](../../../../../../reference/runtime/host-main.cjs#L784720-L784790) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:630117-630187](../../../../../../reference/runtime/sand-eval-runner.cjs#L630117-L630187) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:784720

Calls written directly in this body: no calls identifiable by name.

SHA-256 of the source span: `7eb4f19cf45ce810f3b60e582c1d65f718b94b9a6127ad483edbf8b56129e49b`.

### evaluation:630117

Calls written directly in this body: no calls identifiable by name.

SHA-256 of the source span: `d22e1b6daa5ec306b547dabcad73cac89e04ed4363254f0765f49fd16ecb07bc`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
