# `createServerTranscriptTail/requiresServer`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/transcripts/README.en.md).

**Module:** `shared/node/server-transcript/server-transcript-tail.ts` · [Module README](../../../../../../modules/shared/node/server-transcript/server-transcript-tail-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:713009-713009](../../../../../../../reference/runtime/host-main.cjs#L713009-L713009) | `ArrowFunctionExpression` | no | `agentId` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:713009-713009](../../../../../../../reference/runtime/host-main.cjs#L713009-L713009) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at host:713009 uses an implicit arrow-function return.

### host:713009

Calls written directly in this body: `deps.requiredAgents.has`.

SHA-256 of the source span: `513e3b44e74341c6ffb42d84d5057b023e97c75d367d356dde651ecf91fc63d5`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
