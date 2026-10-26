# `clearGeneratedRoomNameStamps`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/agent-identity/generated-room-name-stamps.ts` · [Module README](../../../../../../modules/host/extensions/agent-identity/generated-room-name-stamps-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:496422-496443](../../../../../../../reference/runtime/host-main.cjs#L496422-L496443) | `FunctionDeclaration` | yes | `args` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:496422-496443](../../../../../../../reference/runtime/host-main.cjs#L496422-L496443) | 5 | 1 | 1 | 2 | 0 | 0 |

### host:496422

Calls written directly in this body: `.toISOString`, `DIR_NAME_SAFE_UUID2.test`, `JSON.stringify`, `args.publishAgentRoster`, `clearProfileNameStamp`, `clearedIds.push`, `getSandProfilePath`, `readSandGroupConfig`, `readSandProfileFile`.

SHA-256 of the source span: `c93915c3457456cc9ff19356368d120182317671870708b2b7b3fa139774c03a`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
