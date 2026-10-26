# `firstSentAgeField`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/transcripts/README.en.md).

**Module:** `shared/node/server-transcript/server-agent-action-core.ts` · [Module README](../../../../../../modules/shared/node/server-transcript/server-agent-action-core-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:709976-709980](../../../../../../../reference/runtime/host-main.cjs#L709976-L709980) | `FunctionDeclaration` | no | `firstSentAtMs` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:709976-709980](../../../../../../../reference/runtime/host-main.cjs#L709976-L709980) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:709976

Calls written directly in this body: `BigInt`, `Date.now`, `Math.floor`, `Math.max`.

SHA-256 of the source span: `386f5e9556e2db2140fac3885b50c418cf0260cdffe82ddbdcb00c702872faeb`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
