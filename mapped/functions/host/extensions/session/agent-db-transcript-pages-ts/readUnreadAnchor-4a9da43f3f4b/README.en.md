# `readUnreadAnchor`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/transcripts/README.en.md).

**Module:** `host/extensions/session/agent-db-transcript-pages.ts` · [Module README](../../../../../../modules/host/extensions/session/agent-db-transcript-pages-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:718147-718160](../../../../../../../reference/runtime/host-main.cjs#L718147-L718160) | `FunctionDeclaration` | no | `statements, boundaryAt` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:718147-718160](../../../../../../../reference/runtime/host-main.cjs#L718147-L718160) | 3 | 0 | 0 | 2 | 0 | 0 |

### host:718147

Calls written directly in this body: `Math.max`, `statements.countUnreadRows.get`, `statements.findUnreadAnchor.get`.

SHA-256 of the source span: `28a11cc0609c26460a2275d2c318a10973604fa0340810abe75a53355622b39b`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
