# `readAvatarWithinDir`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `host/agents/agent-avatar.ts` · [Module README](../../../../../modules/host/agents/agent-avatar-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:716832-716863](../../../../../../reference/runtime/host-main.cjs#L716832-L716863) | `FunctionDeclaration` | yes | `agentDir, candidate` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:716832-716863](../../../../../../reference/runtime/host-main.cjs#L716832-L716863) | 5 | 0 | 2 | 5 | 0 | 1 |

### host:716832

Calls written directly in this body: `.next`, `avatarDataUrlCache.delete`, `avatarDataUrlCache.get`, `avatarDataUrlCache.keys`, `avatarDataUrlCache.set`, `avatarVersionForBytes`, `bytes.toString`, `reportFallbackUnlessAbsent`, `resolveAndStatAvatar`, `sniffAvatarMimeType`.

Assignment or increment targets: `bytes`.

SHA-256 of the source span: `7abc87f31bdc6c9ca6701383633aceae54da9a4cf95b90f65e9314fc02a25705`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
