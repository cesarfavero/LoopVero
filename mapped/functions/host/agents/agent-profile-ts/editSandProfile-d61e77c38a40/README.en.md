# `editSandProfile`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `host/agents/agent-profile.ts` · [Module README](../../../../../modules/host/agents/agent-profile-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:491586-491599](../../../../../../reference/runtime/host-main.cjs#L491586-L491599) | `FunctionDeclaration` | no | `agentDir, edit` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:491586-491599](../../../../../../reference/runtime/host-main.cjs#L491586-L491599) | 3 | 0 | 0 | 0 | 0 | 0 |

### host:491586

Calls written directly in this body: `current2.name.trim`, `edit.avatarColor.trim`, `edit.avatarShape.trim`, `edit.description.trim`, `edit.name.trim`, `edit.title.trim`, `getSandProfilePath`, `keptProfileName`, `readSandProfileFile`, `writeSandProfileFile`.

SHA-256 of the source span: `5132ddea99ff89d517c0bf0ad5cf1742cd9f92a77a2116e14302a5043805c66c`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
