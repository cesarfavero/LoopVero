# `readLegacyStoredAvatar`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/session/session-profile-files.ts` · [Module README](../../../../../../modules/host/extensions/session/session-profile-files-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:722852-722859](../../../../../../../reference/runtime/host-main.cjs#L722852-L722859) | `FunctionDeclaration` | yes | `host, agentId, read2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:722852-722859](../../../../../../../reference/runtime/host-main.cjs#L722852-L722859) | 1 | 0 | 1 | 2 | 0 | 0 |

### host:722852

Calls written directly in this body: `host.agentExists`, `host.getAgentDir`, `host.withAgentDb`.

SHA-256 of the source span: `5f01d5f4ed97d661194fd3d5f85ea599ca6af206a225355e4b9fcb478f065894`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
