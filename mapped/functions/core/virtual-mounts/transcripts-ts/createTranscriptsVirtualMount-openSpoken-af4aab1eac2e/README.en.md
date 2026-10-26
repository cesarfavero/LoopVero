# `createTranscriptsVirtualMount/openSpoken`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/transcripts/README.en.md).

**Module:** `core/virtual-mounts/transcripts.ts` · [Module README](../../../../../modules/core/virtual-mounts/transcripts-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:766187-766192](../../../../../../reference/runtime/host-main.cjs#L766187-L766192) | `FunctionDeclaration` | yes | `ctx, target` |
| [evaluation:559551-559556](../../../../../../reference/runtime/sand-eval-runner.cjs#L559551-L559556) | `FunctionDeclaration` | yes | `ctx, target` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:766187-766192](../../../../../../reference/runtime/host-main.cjs#L766187-L766192) | 1 | 0 | 1 | 1 | 0 | 0 |
| [evaluation:559551-559556](../../../../../../reference/runtime/sand-eval-runner.cjs#L559551-L559556) | 1 | 0 | 1 | 1 | 0 | 0 |

### host:766187

Calls written directly in this body: `reader.openSpokenTranscript`.

SHA-256 of the source span: `277e0863f447ed127b54441043a1dd8c324c82d74666c53993ad86fbdabf40bc`.

### evaluation:559551

Calls written directly in this body: `reader.openSpokenTranscript`.

SHA-256 of the source span: `277e0863f447ed127b54441043a1dd8c324c82d74666c53993ad86fbdabf40bc`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
