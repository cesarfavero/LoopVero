# `FileAutomationStore.setRunRequestIdDefinition`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/automations/README.en.md).

**Module:** `host/automations/automation-store.ts` · [Module README](../../../../../modules/host/automations/automation-store-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:720703-720718](../../../../../../reference/runtime/host-main.cjs#L720703-L720718) | `method` | no | `{     id,     runId,     requestId: requestId2   }` |
| [evaluation:628054-628069](../../../../../../reference/runtime/sand-eval-runner.cjs#L628054-L628069) | `method` | no | `{     id,     runId,     requestId   }` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:720703-720718](../../../../../../reference/runtime/host-main.cjs#L720703-L720718) | 4 | 0 | 0 | 3 | 0 | 0 |
| [evaluation:628054-628069](../../../../../../reference/runtime/sand-eval-runner.cjs#L628054-L628069) | 4 | 0 | 0 | 3 | 0 | 0 |

### host:720703

Calls written directly in this body: `isSafeFolderId`, `requestId2.trim`, `runs.findIndex`, `this.readConfig`, `this.readRuns`, `this.writeRuns`.

Assignment or increment targets: `nextRuns[computed]`.

SHA-256 of the source span: `0474f4f7f61168cd7a5b45e2ce9925298a291a4710a9ceb0341c4f1d4f262191`.

### evaluation:628054

Calls written directly in this body: `isSafeFolderId`, `requestId.trim`, `runs.findIndex`, `this.readConfig`, `this.readRuns`, `this.writeRuns`.

Assignment or increment targets: `nextRuns[computed]`.

SHA-256 of the source span: `a161adc491eb72818bdebb85f71ff2bc5034f8d83d1bcafce87c2c39ea27418a`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
