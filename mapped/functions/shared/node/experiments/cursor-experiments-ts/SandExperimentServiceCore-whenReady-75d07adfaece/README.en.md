# `SandExperimentServiceCore.whenReady`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `shared/node/experiments/cursor-experiments.ts` · [Module README](../../../../../../modules/shared/node/experiments/cursor-experiments-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:552897-552922](../../../../../../../reference/runtime/host-main.cjs#L552897-L552922) | `method` | yes | `timeoutMs = GATE_READY_TIMEOUT_MS` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:552897-552922](../../../../../../../reference/runtime/host-main.cjs#L552897-L552922) | 3 | 0 | 2 | 2 | 1 | 1 |

### host:552897

Calls written directly in this body: `createDeadlinePolicy`, `deadline.run`, `drain`.

Explicit throw targets: `error64`.

SHA-256 of the source span: `ca919c648bad70a49f9fc963360bf64662f01afd7ac63b212e30a9217c1aa254`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
