# `FileAutomationStore.beginRun`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/automations/README.en.md).

**Module:** `host/automations/automation-store.ts` · [Module README](../../../../../modules/host/automations/automation-store-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:720676-720702](../../../../../../reference/runtime/host-main.cjs#L720676-L720702) | `method` | no | `{     id,     trigger: trigger2,     at: at3 = Date.now(),     event,     runId = (0, import_node_crypto63.randomUUID)(),     coalescedRunIds   }` |
| [evaluation:628027-628053](../../../../../../reference/runtime/sand-eval-runner.cjs#L628027-L628053) | `method` | no | `{     id,     trigger,     at: at3 = Date.now(),     event,     runId = (0, import_node_crypto54.randomUUID)(),     coalescedRunIds   }` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:720676-720702](../../../../../../reference/runtime/host-main.cjs#L720676-L720702) | 5 | 0 | 0 | 4 | 0 | 0 |
| [evaluation:628027-628053](../../../../../../reference/runtime/sand-eval-runner.cjs#L628027-L628053) | 5 | 0 | 0 | 4 | 0 | 0 |

### host:720676

Calls written directly in this body: `.slice`, `clampCoalescedRunIds`, `clampRunDetail`, `isSafeFolderId`, `runs.find`, `this.readConfig`, `this.readRuns`, `this.writeRuns`.

SHA-256 of the source span: `f7186444968e9dd09a24dda63d8431475cd423aa90cb17d3dbd6de20baa7096f`.

### evaluation:628027

Calls written directly in this body: `.slice`, `clampCoalescedRunIds`, `clampRunDetail`, `isSafeFolderId`, `runs.find`, `this.readConfig`, `this.readRuns`, `this.writeRuns`.

SHA-256 of the source span: `2c24b6c75d435ce708008ea5f11ca7879ec48d47dc84c634a7638a3ce64ee5a7`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
