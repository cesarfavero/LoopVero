# `getAgentAvatarPng`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/session/session-profile-files.ts` · [Module README](../../../../../../modules/host/extensions/session/session-profile-files-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:722860-722867](../../../../../../../reference/runtime/host-main.cjs#L722860-L722867) | `FunctionDeclaration` | yes | `host, agentId` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:722860-722867](../../../../../../../reference/runtime/host-main.cjs#L722860-L722867) | 0 | 0 | 2 | 1 | 0 | 0 |

### host:722860

Calls written directly in this body: `getSandProfilePath`, `host.getAgentDir`, `readAvatarBytesWithinDir`, `readLegacyProfileAvatarField`, `readLegacyStoredAvatar`, `resolveDerivedAvatarFilename`.

SHA-256 of the source span: `38fbd0f45e632a3eaf169b9b693cfa9320347f2f683ab8f6c4e8db8a1d912df4`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
