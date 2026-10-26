# `settlePendingLocalToolPermissionEntry`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/transcripts/README.en.md).

**Module:** `shared/transcript/transcript.ts` · [Module README](../../../../../modules/shared/transcript/transcript-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:485042-485044](../../../../../../reference/runtime/host-main.cjs#L485042-L485044) | `FunctionDeclaration` | no | `entry, status, requestId2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:485042-485044](../../../../../../reference/runtime/host-main.cjs#L485042-L485044) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:485042

Calls written directly in this body: `settlePendingCardEntry`.

SHA-256 of the source span: `7e50e2b935166d36c33cc68864110a2ad0af75f780fed8b96408cc37c6aa3876`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
