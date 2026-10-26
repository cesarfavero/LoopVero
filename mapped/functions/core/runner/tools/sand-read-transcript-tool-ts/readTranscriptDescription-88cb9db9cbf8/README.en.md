# `readTranscriptDescription`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/transcripts/README.en.md).

**Module:** `core/runner/tools/sand-read-transcript-tool.ts` · [Module README](../../../../../../modules/core/runner/tools/sand-read-transcript-tool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:766402-766405](../../../../../../../reference/runtime/host-main.cjs#L766402-L766405) | `FunctionDeclaration` | no | `deps` |
| [evaluation:559766-559769](../../../../../../../reference/runtime/sand-eval-runner.cjs#L559766-L559769) | `FunctionDeclaration` | no | `deps` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:766402-766405](../../../../../../../reference/runtime/host-main.cjs#L766402-L766405) | 1 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:559766-559769](../../../../../../../reference/runtime/sand-eval-runner.cjs#L559766-L559769) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:766402

Calls written directly in this body: `offersTranscriptSearch`, `readTranscriptBaseDescription`.

SHA-256 of the source span: `58c51335a6f9724e0eefbc0addbd1dc619e86b4f1c099c7f216146bd9a82d921`.

### evaluation:559766

Calls written directly in this body: `offersTranscriptSearch`, `readTranscriptBaseDescription`.

SHA-256 of the source span: `58c51335a6f9724e0eefbc0addbd1dc619e86b4f1c099c7f216146bd9a82d921`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
