# `createServerTranscriptTail/fetchOmittedRows/worker`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/transcripts/README.en.md).

**Module:** `shared/node/server-transcript/server-transcript-tail.ts` · [Module README](../../../../../../modules/shared/node/server-transcript/server-transcript-tail-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:713200-713221](../../../../../../../reference/runtime/host-main.cjs#L713200-L713221) | `ArrowFunctionExpression` | yes | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:713200-713221](../../../../../../../reference/runtime/host-main.cjs#L713200-L713221) | 2 | 1 | 1 | 1 | 0 | 1 |

### host:713200

Calls written directly in this body: `BigInt`, `deps.client.list`, `listed.entries.find`, `outcomes.set`, `queue.shift`, `sessionRequestFieldOmittingDefault`.

SHA-256 of the source span: `f7abc5003f2d6f3e56edf205ed862ba412164498100aa6c454052ad444472a62`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
