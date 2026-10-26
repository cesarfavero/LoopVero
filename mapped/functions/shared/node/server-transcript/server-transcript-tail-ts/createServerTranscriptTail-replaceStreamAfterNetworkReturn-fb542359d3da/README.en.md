# `createServerTranscriptTail/replaceStreamAfterNetworkReturn`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/transcripts/README.en.md).

**Module:** `shared/node/server-transcript/server-transcript-tail.ts` · [Module README](../../../../../../modules/shared/node/server-transcript/server-transcript-tail-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:713903-713917](../../../../../../../reference/runtime/host-main.cjs#L713903-L713917) | `ArrowFunctionExpression` | no | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:713903-713917](../../../../../../../reference/runtime/host-main.cjs#L713903-L713917) | 2 | 0 | 0 | 2 | 0 | 0 |

### host:713903

Calls written directly in this body: `clock.monotonicNow`, `clock.schedule`, `elapsedMs`, `stream3.lifetime.abort`.

Assignment or increment targets: `stream3.deferredReplacement`.

SHA-256 of the source span: `1a7c84a9724aa5864fbe6b13979aa711c689c286b5a4fa1d1ff339597770c9f4`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
