# `TrayManager.pushError`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/trays/trays-service.ts` · [Module README](../../../../../../modules/host/extensions/trays/trays-service-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:784435-784513](../../../../../../../reference/runtime/host-main.cjs#L784435-L784513) | `method` | no | `{     agentId,     title,     titleKind,     titleParams,     detail,     requestId: requestId2,     errorKind,     errorParams,     usageLimitKind,     unifiedMoreUsage,     rawDetail,     actions: actions2,     dedupeKey: dedupeKey2,     count: count2,     severity   }` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:784435-784513](../../../../../../../reference/runtime/host-main.cjs#L784435-L784513) | 20 | 0 | 0 | 2 | 0 | 0 |

### host:784435

Calls written directly in this body: `Date.now`, `appendOccurrenceKeepingFirstAndLatest`, `contentDedupeKey`, `newId`, `this.activitySeqByTrayId.set`, `this.emit`, `this.enforceCap`, `this.trays.findIndex`.

Assignment or increment targets: `next[computed]`, `this.activitySeq`, `this.trays`.

SHA-256 of the source span: `2ae5d0993dd10c61cb290ed83909acac2e87ee4bb2468eb12f7c28a670ffbd8f`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
