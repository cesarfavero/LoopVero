# `setAgentAvatarBytes`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/session/session-mutations.ts` · [Module README](../../../../../../modules/host/extensions/session/session-mutations-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:722735-722761](../../../../../../../reference/runtime/host-main.cjs#L722735-L722761) | `FunctionDeclaration` | yes | `host, db, dbPath, agentId, pngBytes, activeAgentId` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:722735-722761](../../../../../../../reference/runtime/host-main.cjs#L722735-L722761) | 2 | 1 | 3 | 1 | 0 | 0 |

### host:722735

Calls written directly in this body: `Buffer.from`, `buildSummary`, `db.getSandProfile`, `db.setSandProfile`, `dropLegacyProfileAvatar`, `ensureSandDataDirSync`, `invalidateAvatarDataUrlCache`, `listConventionalAvatarFilenames`, `loadAgentDbExtras`, `removeSandDataFileSync`, `statIfExists`, `writeSandDataFile`.

SHA-256 of the source span: `be6085971b2d2bc05a70602fe20edcb554d78c87e1024296923d4d559da9ff99`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
