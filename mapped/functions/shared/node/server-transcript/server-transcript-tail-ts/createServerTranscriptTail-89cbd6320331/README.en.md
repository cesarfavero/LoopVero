# `createServerTranscriptTail`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/transcripts/README.en.md).

**Module:** `shared/node/server-transcript/server-transcript-tail.ts` · [Module README](../../../../../../modules/shared/node/server-transcript/server-transcript-tail-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:712928-714113](../../../../../../../reference/runtime/host-main.cjs#L712928-L714113) | `FunctionDeclaration` | no | `deps` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:712928-714113](../../../../../../../reference/runtime/host-main.cjs#L712928-L714113) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:712928

Calls written directly in this body: `createBackendReachability`, `createBackendReturnWake`, `createIdleWatchdogPolicy`, `createRetryPolicy`, `new Map`, `new TextDecoder`.

SHA-256 of the source span: `6a4a755b76eca063fc79972de8d9cf0820d62b28ab8b013f3a595f367ad21052`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
