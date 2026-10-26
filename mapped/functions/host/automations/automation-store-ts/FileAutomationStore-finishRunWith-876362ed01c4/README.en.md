# `FileAutomationStore.finishRunWith`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/automations/README.en.md).

**Module:** `host/automations/automation-store.ts` · [Module README](../../../../../modules/host/automations/automation-store-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:720749-720782](../../../../../../reference/runtime/host-main.cjs#L720749-L720782) | `method` | no | `{     id,     runId,     status,     at: at3,     detail,     errorKind,     requestId: requestId2,     deriveNextRunAt   }` |
| [evaluation:628100-628133](../../../../../../reference/runtime/sand-eval-runner.cjs#L628100-L628133) | `method` | no | `{     id,     runId,     status,     at: at3,     detail,     errorKind,     requestId,     deriveNextRunAt   }` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:720749-720782](../../../../../../reference/runtime/host-main.cjs#L720749-L720782) | 7 | 0 | 0 | 4 | 0 | 0 |
| [evaluation:628100-628133](../../../../../../reference/runtime/sand-eval-runner.cjs#L628100-L628133) | 7 | 0 | 0 | 4 | 0 | 0 |

### host:720749

Calls written directly in this body: `clampRunDetail`, `isSafeFolderId`, `requestId2.trim`, `runs.findIndex`, `this.readConfig`, `this.readRuns`, `this.toRecord`, `this.writeRuns`.

Assignment or increment targets: `nextRuns[computed]`.

SHA-256 of the source span: `dec961844c3b0b147a37b031b9af07744fe6ea34cedd7f990b477efc6441c36d`.

### evaluation:628100

Calls written directly in this body: `clampRunDetail`, `isSafeFolderId`, `requestId.trim`, `runs.findIndex`, `this.readConfig`, `this.readRuns`, `this.toRecord`, `this.writeRuns`.

Assignment or increment targets: `nextRuns[computed]`.

SHA-256 of the source span: `ad4b384804497d64faeb1b53146d37b424f70cfb9668f10f24109bf1d81b290e`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
