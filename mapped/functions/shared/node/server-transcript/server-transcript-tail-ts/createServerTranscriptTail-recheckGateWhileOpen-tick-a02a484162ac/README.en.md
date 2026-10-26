# `createServerTranscriptTail/recheckGateWhileOpen/tick`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/transcripts/README.en.md).

**Module:** `shared/node/server-transcript/server-transcript-tail.ts` · [Module README](../../../../../../modules/shared/node/server-transcript/server-transcript-tail-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:713807-713825](../../../../../../../reference/runtime/host-main.cjs#L713807-L713825) | `ArrowFunctionExpression` | no | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:713807-713825](../../../../../../../reference/runtime/host-main.cjs#L713807-L713825) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:713807

Calls written directly in this body: `clock.schedule`.

Assignment or increment targets: `scheduled`.

SHA-256 of the source span: `f82175d593e133723a381b9a9d44332b2c9d1a85d95204f03b2ad6e9cf94264f`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
