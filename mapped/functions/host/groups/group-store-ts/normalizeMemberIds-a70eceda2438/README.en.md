# `normalizeMemberIds`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/group-messaging/README.en.md).

**Module:** `host/groups/group-store.ts` · [Module README](../../../../../modules/host/groups/group-store-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:491441-491452](../../../../../../reference/runtime/host-main.cjs#L491441-L491452) | `FunctionDeclaration` | no | `raw` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:491441-491452](../../../../../../reference/runtime/host-main.cjs#L491441-L491452) | 4 | 1 | 0 | 2 | 0 | 0 |

### host:491441

Calls written directly in this body: `Array.isArray`, `new Set`, `parseAgentId`, `seen.add`, `seen.has`, `value.trim`.

SHA-256 of the source span: `21859c899df77be48128fff1b77d8b85cedac58703274be60253cf614b4b7cbc`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
