# `mergeForced`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/group-messaging/README.en.md).

**Module:** `core/groups/group-chat-orchestrator.ts` · [Module README](../../../../../modules/core/groups/group-chat-orchestrator-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:737599-737612](../../../../../../reference/runtime/host-main.cjs#L737599-L737612) | `FunctionDeclaration` | no | `into, from2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:737599-737612](../../../../../../reference/runtime/host-main.cjs#L737599-L737612) | 1 | 1 | 0 | 1 | 0 | 0 |

### host:737599

Calls written directly in this body: `merged.get`, `merged.set`, `new Map`.

SHA-256 of the source span: `07de8d9f4d324be445bcb39714720392ee38113fafcf0ce889ed7a69b782b798`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
