# `resolveDerivedAvatarFilename`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `host/agents/agent-avatar.ts` · [Module README](../../../../../modules/host/agents/agent-avatar-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:716754-716772](../../../../../../reference/runtime/host-main.cjs#L716754-L716772) | `FunctionDeclaration` | no | `agentDir, legacyFieldValue` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:716754-716772](../../../../../../reference/runtime/host-main.cjs#L716754-L716772) | 6 | 0 | 0 | 7 | 0 | 1 |

### host:716754

Calls written directly in this body: `.isFile`, `.slice`, `.toLowerCase`, `CONVENTIONAL_AVATAR_EXTENSIONS.includes`, `extensionForMime`, `listConventionalAvatarFilenames`, `reportFallbackUnlessAbsent`, `resolveAvatarPathWithinDir`, `sniffAvatarMimeType`.

SHA-256 of the source span: `b3eebbc5ffff936a97575c7ed827fbc683f029020f25f8c2df054bef6ff55b30`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
