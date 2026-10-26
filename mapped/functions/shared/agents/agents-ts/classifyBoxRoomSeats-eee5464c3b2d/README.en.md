# `classifyBoxRoomSeats`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `shared/agents/agents.ts` · [Module README](../../../../../modules/shared/agents/agents-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:485356-485366](../../../../../../reference/runtime/host-main.cjs#L485356-L485366) | `FunctionDeclaration` | no | `agents, isServerBound` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:485356-485366](../../../../../../reference/runtime/host-main.cjs#L485356-L485366) | 1 | 1 | 0 | 1 | 0 | 0 |

### host:485356

Calls written directly in this body: `agents.map`, `isBoxHostedRoom`, `memberIds.every`, `new Set`, `room.memberIds.filter`, `rooms.push`.

SHA-256 of the source span: `deda93eb5bf8e798fa63630124d8ea664127eb91221be465d245819fa67be4da`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
