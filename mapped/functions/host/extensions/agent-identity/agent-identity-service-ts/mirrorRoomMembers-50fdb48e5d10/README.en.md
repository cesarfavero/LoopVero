# `mirrorRoomMembers`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/agent-identity/agent-identity-service.ts` · [Module README](../../../../../../modules/host/extensions/agent-identity/agent-identity-service-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:495142-495148](../../../../../../../reference/runtime/host-main.cjs#L495142-L495148) | `FunctionDeclaration` | no | `agentDir, memberIds` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:495142-495148](../../../../../../../reference/runtime/host-main.cjs#L495142-L495148) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:495142

Calls written directly in this body: `current2.memberIds.every`, `readSandGroupConfig`, `writeSandGroupConfig`.

SHA-256 of the source span: `67c1966cf8d74890e36d1716d79995d5cfcff607e20c6ab23f5910d8da4b4823`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
