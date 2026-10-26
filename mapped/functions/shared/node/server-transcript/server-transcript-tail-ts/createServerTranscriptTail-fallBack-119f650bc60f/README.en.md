# `createServerTranscriptTail/fallBack`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/transcripts/README.en.md).

**Module:** `shared/node/server-transcript/server-transcript-tail.ts` · [Module README](../../../../../../modules/shared/node/server-transcript/server-transcript-tail-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:713073-713100](../../../../../../../reference/runtime/host-main.cjs#L713073-L713100) | `ArrowFunctionExpression` | no | `{     reason,     recoverable = false   }` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:713073-713100](../../../../../../../reference/runtime/host-main.cjs#L713073-L713100) | 8 | 1 | 0 | 3 | 0 | 0 |

### host:713073

Calls written directly in this body: `agents.delete`, `canFallBack`, `cancelBodyRetry`, `clock.schedule`, `deps.log`, `deps.onActiveChange`, `fallenBack`, `hasRequiredAgents`, `requiresServer`, `tornDown`, `transition`.

SHA-256 of the source span: `2055d8f9086fe21807ddefc8c0c894b3f2dc44ed10ed13994e65d1d4653e3df8`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
