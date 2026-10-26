# `materialized`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/transcripts/README.en.md).

**Module:** `host/extensions/transcript/transcript-store.ts` · [Module README](../../../../../../modules/host/extensions/transcript/transcript-store-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:733099-733102](../../../../../../../reference/runtime/host-main.cjs#L733099-L733102) | `FunctionDeclaration` | no | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:733099-733102](../../../../../../../reference/runtime/host-main.cjs#L733099-L733102) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:733099

Calls written directly in this body: `materialize2`, `mirror.read`.

Assignment or increment targets: `mirror`.

SHA-256 of the source span: `5042923a1e186ba8978b555b17e68a97d793e25cff61b7383178aacea5360b2b`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
