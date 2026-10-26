# `SandExperimentServiceCore.start`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `shared/node/experiments/cursor-experiments.ts` · [Module README](../../../../../../modules/shared/node/experiments/cursor-experiments-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:552652-552672](../../../../../../../reference/runtime/host-main.cjs#L552652-L552672) | `method` | no | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:552652-552672](../../../../../../../reference/runtime/host-main.cjs#L552652-L552672) | 1 | 0 | 0 | 0 | 0 | 1 |

### host:552652

Calls written directly in this body: `errorLogTag`, `loadCachedBootstrap`, `reportExperimentsDiagnostic`, `this.hydrate`, `this.options.getCacheDir`, `this.refreshPoll.start`, `this.refreshSnapshot`.

Assignment or increment targets: `this.flagsFetchedAtMs`, `this.pollHandle`, `this.savedBootstrap`.

SHA-256 of the source span: `27bd86a866c573c08de3e8daffc1360cb4a2649b61e8a70c160fadc4cd5ac960`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
