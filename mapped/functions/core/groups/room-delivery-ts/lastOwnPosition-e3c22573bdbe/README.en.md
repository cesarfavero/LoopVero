# `lastOwnPosition`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/group-messaging/README.en.md).

**Module:** `core/groups/room-delivery.ts` · [Module README](../../../../../modules/core/groups/room-delivery-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:737793-737801](../../../../../../reference/runtime/host-main.cjs#L737793-L737801) | `FunctionDeclaration` | no | `memberId, history` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:737793-737801](../../../../../../reference/runtime/host-main.cjs#L737793-L737801) | 1 | 1 | 0 | 2 | 0 | 0 |

### host:737793

Calls written directly in this body: `positionOf`.

Assignment or increment targets: `index`.

SHA-256 of the source span: `04182fcc5b828dbadf5a65774a215ded8ea756f81f4b92572c4d071583bf9864`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
