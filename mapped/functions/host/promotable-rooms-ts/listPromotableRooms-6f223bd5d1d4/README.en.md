# `listPromotableRooms`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/architecture/README.en.md).

**Module:** `host/promotable-rooms.ts` · [Module README](../../../../modules/host/promotable-rooms-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:491649-491695](../../../../../reference/runtime/host-main.cjs#L491649-L491695) | `FunctionDeclaration` | yes | `deps` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:491649-491695](../../../../../reference/runtime/host-main.cjs#L491649-L491695) | 3 | 2 | 2 | 1 | 1 | 1 |

### host:491649

Calls written directly in this body: `.run`, `classifyBoxRoomSeats`, `deps.isTurnInFlight`, `deps.listAgents`, `quiet.push`, `quiet.slice`, `skipped2.push`.

Explicit throw targets: `error64`.

SHA-256 of the source span: `1ee15b043fe22e3b00436f703a053a7dbc74770a8d8e5802232a873e20b5247d`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
