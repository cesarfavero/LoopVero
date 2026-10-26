# `WidgetResponses.submitSecret`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/transcripts/README.en.md).

**Module:** `host/extensions/transcript/widget-responses.ts` · [Module README](../../../../../../modules/host/extensions/transcript/widget-responses-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:783033-783056](../../../../../../../reference/runtime/host-main.cjs#L783033-L783056) | `method` | yes | `entryId, value, agentId` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:783033-783056](../../../../../../../reference/runtime/host-main.cjs#L783033-L783056) | 5 | 0 | 2 | 3 | 1 | 0 |

### host:783033

Calls written directly in this body: `findEntry`, `hostTrayTitle`, `new SandSecretStoreFailedError`, `session.db.updateTranscriptEntry`, `this.routeSecret`, `this.tm.roster.emit`, `this.tm.sessions.ensureActionTarget`, `this.tm.trayErrors.pushError`, `updateEntry`, `value.trim`.

Explicit throw targets: `SandSecretStoreFailedError`.

SHA-256 of the source span: `4ab40c77318d7ad6cb37220768672fa5fff2dfe8fe067b6a62ab279f0ee0e61c`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
