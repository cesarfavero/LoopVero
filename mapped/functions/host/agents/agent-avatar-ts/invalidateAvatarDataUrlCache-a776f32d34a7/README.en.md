# `invalidateAvatarDataUrlCache`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `host/agents/agent-avatar.ts` · [Module README](../../../../../modules/host/agents/agent-avatar-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:716864-716869](../../../../../../reference/runtime/host-main.cjs#L716864-L716869) | `FunctionDeclaration` | no | `agentDir` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:716864-716869](../../../../../../reference/runtime/host-main.cjs#L716864-L716869) | 1 | 1 | 0 | 0 | 0 | 0 |

### host:716864

Calls written directly in this body: `avatarDataUrlCache.delete`, `avatarDataUrlCache.keys`, `key.startsWith`.

SHA-256 of the source span: `734e949d564df7b49decede799907b008908d2210a6b5b4750e5670ea3101767`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
