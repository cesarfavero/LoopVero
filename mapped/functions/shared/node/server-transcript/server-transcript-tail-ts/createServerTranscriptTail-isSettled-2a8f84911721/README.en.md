# `createServerTranscriptTail/isSettled`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/transcripts/README.en.md).

**Module:** `shared/node/server-transcript/server-transcript-tail.ts` · [Module README](../../../../../../modules/shared/node/server-transcript/server-transcript-tail-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:713752-713752](../../../../../../../reference/runtime/host-main.cjs#L713752-L713752) | `ArrowFunctionExpression` | no | `state` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:713752-713752](../../../../../../../reference/runtime/host-main.cjs#L713752-L713752) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at host:713752 uses an implicit arrow-function return.

### host:713752

Calls written directly in this body: `locks.has`, `tailStateKey`.

SHA-256 of the source span: `774966c746c418c56ce1615e33086179208971babe0168c3ce4d259929113cf9`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
