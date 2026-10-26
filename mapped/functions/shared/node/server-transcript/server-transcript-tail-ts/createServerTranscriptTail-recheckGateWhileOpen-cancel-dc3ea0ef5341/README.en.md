# `createServerTranscriptTail/recheckGateWhileOpen/cancel`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/transcripts/README.en.md).

**Module:** `shared/node/server-transcript/server-transcript-tail.ts` · [Module README](../../../../../../modules/shared/node/server-transcript/server-transcript-tail-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:713801-713806](../../../../../../../reference/runtime/host-main.cjs#L713801-L713806) | `ArrowFunctionExpression` | no | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:713801-713806](../../../../../../../reference/runtime/host-main.cjs#L713801-L713806) | 0 | 0 | 0 | 0 | 0 | 0 |

### host:713801

Calls written directly in this body: `scheduled.dispose`, `signal.removeEventListener`.

Assignment or increment targets: `cancelled`, `scheduled`.

SHA-256 of the source span: `ec3216dcec8f1c811cac3690158e0b8469373b3c95b5386969deba87e2616b5d`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
