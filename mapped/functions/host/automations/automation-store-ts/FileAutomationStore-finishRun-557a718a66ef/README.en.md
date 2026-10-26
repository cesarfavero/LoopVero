# `FileAutomationStore.finishRun`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/automations/README.en.md).

**Module:** `host/automations/automation-store.ts` · [Module README](../../../../../modules/host/automations/automation-store-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:720719-720728](../../../../../../reference/runtime/host-main.cjs#L720719-L720728) | `method` | no | `id, runId, status, at3 = Date.now(), detail` |
| [evaluation:628070-628079](../../../../../../reference/runtime/sand-eval-runner.cjs#L628070-L628079) | `method` | no | `id, runId, status, at3 = Date.now(), detail` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:720719-720728](../../../../../../reference/runtime/host-main.cjs#L720719-L720728) | 1 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:628070-628079](../../../../../../reference/runtime/sand-eval-runner.cjs#L628070-L628079) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:720719

Calls written directly in this body: `this.finishRunWith`.

SHA-256 of the source span: `49070daa21ccaec94aa94fa7cc16a3654ced8e9b0c3db2a408e282f392cf9e50`.

### evaluation:628070

Calls written directly in this body: `this.finishRunWith`.

SHA-256 of the source span: `49070daa21ccaec94aa94fa7cc16a3654ced8e9b0c3db2a408e282f392cf9e50`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
