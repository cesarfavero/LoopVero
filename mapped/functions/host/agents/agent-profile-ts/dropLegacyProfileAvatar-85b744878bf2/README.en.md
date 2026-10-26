# `dropLegacyProfileAvatar`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `host/agents/agent-profile.ts` · [Module README](../../../../../modules/host/agents/agent-profile-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:491622-491627](../../../../../../reference/runtime/host-main.cjs#L491622-L491627) | `FunctionDeclaration` | no | `agentDir` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:491622-491627](../../../../../../reference/runtime/host-main.cjs#L491622-L491627) | 2 | 0 | 0 | 1 | 0 | 0 |

### host:491622

Calls written directly in this body: `getSandProfilePath`, `readLegacyProfileAvatarField`, `readSandProfileFile`, `writeSandProfileFile`.

SHA-256 of the source span: `3c4584aca695fdeb127b2919c0ab0a25287453761ae5f069cde2dc38f34e0ef3`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
