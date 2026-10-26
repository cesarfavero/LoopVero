# `settlePendingCookieOriginApprovalEntry`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/transcripts/README.en.md).

**Module:** `shared/transcript/transcript.ts` · [Module README](../../../../../modules/shared/transcript/transcript-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:485045-485067](../../../../../../reference/runtime/host-main.cjs#L485045-L485067) | `FunctionDeclaration` | no | `entry, status, requestId2, settlement` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:485045-485067](../../../../../../reference/runtime/host-main.cjs#L485045-L485067) | 4 | 0 | 0 | 3 | 0 | 0 |

### host:485045

Calls written directly in this body: `settlePendingCardEntry`.

SHA-256 of the source span: `7efcfca6d5bd346450b9e58ceec08ce53637d0c360862ca5c9f55deebe271c6d`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
