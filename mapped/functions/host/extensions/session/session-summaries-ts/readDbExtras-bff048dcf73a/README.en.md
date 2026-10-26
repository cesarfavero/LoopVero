# `readDbExtras`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/context-compaction/README.en.md).

**Module:** `host/extensions/session/session-summaries.ts` · [Module README](../../../../../../modules/host/extensions/session/session-summaries-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:722555-722583](../../../../../../../reference/runtime/host-main.cjs#L722555-L722583) | `FunctionDeclaration` | no | `db, dirName, dbStats` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:722555-722583](../../../../../../../reference/runtime/host-main.cjs#L722555-L722583) | 0 | 0 | 0 | 2 | 0 | 1 |

### host:722555

Calls written directly in this body: `db.get`, `db.getAgentOrigin`, `db.getAgentPurpose`, `db.getAwaitingUserResponse`, `db.getLastTurnSettlement`, `db.getSandProfile`, `db.getUnreadState`, `deriveTranscriptExtras`, `getDefaultAgentMetadata`, `getSummaryUpdatedAt`, `parseAgentId`, `seedActivityFromMtime`.

SHA-256 of the source span: `288ae360b0c95eeeddf4c3dbc931f4f154c7114eaeddc69229530e3196b7b25a`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
