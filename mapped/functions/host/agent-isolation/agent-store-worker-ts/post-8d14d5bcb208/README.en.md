# `post`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/isolation/README.en.md).

**Module:** `host/agent-isolation/agent-store-worker.ts` · [Module README](../../../../../modules/host/agent-isolation/agent-store-worker-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [state-worker:22651-22653](../../../../../../reference/runtime/workers/state/agent-store-worker.cjs#L22651-L22653) | `FunctionDeclaration` | no | `message, transfer = []` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [state-worker:22651-22653](../../../../../../reference/runtime/workers/state/agent-store-worker.cjs#L22651-L22653) | 0 | 0 | 0 | 0 | 0 | 0 |

### state-worker:22651

Calls written directly in this body: `import_node_worker_threads.parentPort.postMessage`.

SHA-256 of the source span: `bce600255274e3000d3f0ac79ff0ef2fd99ebae07d41badf54e0dc6f7f7ca44c`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
