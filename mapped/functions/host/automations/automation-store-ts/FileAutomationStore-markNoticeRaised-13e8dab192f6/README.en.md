# `FileAutomationStore.markNoticeRaised`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/automations/README.en.md).

**Module:** `host/automations/automation-store.ts` · [Module README](../../../../../modules/host/automations/automation-store-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:720632-720646](../../../../../../reference/runtime/host-main.cjs#L720632-L720646) | `method` | no | `id, notice` |
| [evaluation:627983-627997](../../../../../../reference/runtime/sand-eval-runner.cjs#L627983-L627997) | `method` | no | `id, notice` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:720632-720646](../../../../../../reference/runtime/host-main.cjs#L720632-L720646) | 3 | 0 | 0 | 4 | 0 | 0 |
| [evaluation:627983-627997](../../../../../../reference/runtime/sand-eval-runner.cjs#L627983-L627997) | 3 | 0 | 0 | 4 | 0 | 0 |

### host:720632

Calls written directly in this body: `config2.pendingNotices.filter`, `config2.raisedNotices.includes`, `isAutomationNoticeId`, `isSafeFolderId`, `this.readConfig`, `this.toRecord`, `this.writeConfig`.

SHA-256 of the source span: `8840b37fcb8215f11beea73506b76e5bb39850a2314fc9c49bb4a816e059049a`.

### evaluation:627983

Calls written directly in this body: `config2.pendingNotices.filter`, `config2.raisedNotices.includes`, `isAutomationNoticeId`, `isSafeFolderId`, `this.readConfig`, `this.toRecord`, `this.writeConfig`.

SHA-256 of the source span: `8840b37fcb8215f11beea73506b76e5bb39850a2314fc9c49bb4a816e059049a`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
