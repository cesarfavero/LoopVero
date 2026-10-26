# `settlePendingCardEntry`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/transcripts/README.en.md).

**Module:** `shared/transcript/transcript.ts` · [Module README](../../../../../modules/shared/transcript/transcript-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:485032-485038](../../../../../../reference/runtime/host-main.cjs#L485032-L485038) | `FunctionDeclaration` | no | `kind, entry, status, requestId2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:485032-485038](../../../../../../reference/runtime/host-main.cjs#L485032-L485038) | 3 | 0 | 0 | 4 | 0 | 0 |

### host:485032

Calls written directly in this body: `kind.pendingOf`, `kind.requestIdOf`, `kind.withStatus`.

SHA-256 of the source span: `c365b20df278b9cc813e25351212ad4c2d2ae3326b9a14dea3755f003ffdddce`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
