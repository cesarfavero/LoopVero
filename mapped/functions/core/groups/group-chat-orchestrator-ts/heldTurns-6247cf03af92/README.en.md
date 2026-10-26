# `heldTurns`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/group-messaging/README.en.md).

**Module:** `core/groups/group-chat-orchestrator.ts` · [Module README](../../../../../modules/core/groups/group-chat-orchestrator-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:737587-737598](../../../../../../reference/runtime/host-main.cjs#L737587-L737598) | `FunctionDeclaration` | no | `members2, held` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:737587-737598](../../../../../../reference/runtime/host-main.cjs#L737587-L737598) | 2 | 1 | 0 | 1 | 0 | 0 |

### host:737587

Calls written directly in this body: `carriesPayload`, `forced.set`, `members2.some`, `new Map`.

SHA-256 of the source span: `81edaf1bddee6395db31f3f9a82f82110ad854594525b432464bf59a330bb9f2`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
