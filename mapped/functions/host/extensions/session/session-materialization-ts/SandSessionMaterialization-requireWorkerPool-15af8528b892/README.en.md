# `SandSessionMaterialization.requireWorkerPool`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/session/session-materialization.ts` · [Module README](../../../../../../modules/host/extensions/session/session-materialization-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:721386-721391](../../../../../../../reference/runtime/host-main.cjs#L721386-L721391) | `method` | no | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:721386-721391](../../../../../../../reference/runtime/host-main.cjs#L721386-L721391) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:721386

Calls written directly in this body: `this.host.createBlobWorkerPool`.

Assignment or increment targets: `this.workerPool`.

SHA-256 of the source span: `4a199def91b85ecbcb06c1bcbac4b160e716b911294887b906945ef7ef546ed4`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
