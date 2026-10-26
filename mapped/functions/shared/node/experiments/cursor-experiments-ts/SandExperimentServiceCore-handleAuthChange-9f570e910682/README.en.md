# `SandExperimentServiceCore.handleAuthChange`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `shared/node/experiments/cursor-experiments.ts` · [Module README](../../../../../../modules/shared/node/experiments/cursor-experiments-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:552673-552681](../../../../../../../reference/runtime/host-main.cjs#L552673-L552681) | `method` | no | `accountSlot` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:552673-552681](../../../../../../../reference/runtime/host-main.cjs#L552673-L552681) | 1 | 0 | 0 | 0 | 0 | 0 |

### host:552673

Calls written directly in this body: `this.refresh`, `this.refreshSnapshot`, `this.renderedGateExposuresAwaitingUser.clear`.

Assignment or increment targets: `this.accountSlot`, `this.authRevision`, `this.authenticatedBootstrapPending`, `this.hasFreshAuthenticatedExperimentBootstrap`.

SHA-256 of the source span: `048cd151bf10abcb0620dacbd44e8c4425059a696c59a4d6fe3ec7ea4458d866`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
