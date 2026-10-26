# `readSpoken`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/transcripts/README.en.md).

**Module:** `core/virtual-mounts/transcripts.ts` · [Module README](../../../../../modules/core/virtual-mounts/transcripts-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:766166-766184](../../../../../../reference/runtime/host-main.cjs#L766166-L766184) | `FunctionDeclaration` | yes | `source, window2` |
| [evaluation:559530-559548](../../../../../../reference/runtime/sand-eval-runner.cjs#L559530-L559548) | `FunctionDeclaration` | yes | `source, window2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:766166-766184](../../../../../../reference/runtime/host-main.cjs#L766166-L766184) | 4 | 0 | 1 | 1 | 0 | 0 |
| [evaluation:559530-559548](../../../../../../reference/runtime/sand-eval-runner.cjs#L559530-L559548) | 4 | 0 | 1 | 1 | 0 | 0 |

### host:766166

Calls written directly in this body: `clampSandTranscriptMessageLimit`, `page.messages.at`, `renderSandSpokenMessages`, `source.readMessages`.

SHA-256 of the source span: `300612dc7995b5c47dbd17774c93b32c4073356983a9971a1471fbbd19ebdf76`.

### evaluation:559530

Calls written directly in this body: `clampSandTranscriptMessageLimit`, `page.messages.at`, `renderSandSpokenMessages`, `source.readMessages`.

SHA-256 of the source span: `300612dc7995b5c47dbd17774c93b32c4073356983a9971a1471fbbd19ebdf76`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
