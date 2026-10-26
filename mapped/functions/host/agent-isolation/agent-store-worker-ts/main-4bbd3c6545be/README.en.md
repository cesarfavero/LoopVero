# `main`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/isolation/README.en.md).

**Module:** `host/agent-isolation/agent-store-worker.ts` · [Module README](../../../../../modules/host/agent-isolation/agent-store-worker-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [state-worker:22661-22807](../../../../../../reference/runtime/workers/state/agent-store-worker.cjs#L22661-L22807) | `FunctionDeclaration` | no | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [state-worker:22661-22807](../../../../../../reference/runtime/workers/state/agent-store-worker.cjs#L22661-L22807) | 4 | 0 | 0 | 1 | 0 | 1 |

### state-worker:22661

Calls written directly in this body: `console.error`, `invariant`, `new ConversationBlobStoreDb`, `port.on`, `process.exit`.

Assignment or increment targets: `code`, `store`.

SHA-256 of the source span: `4839fc0bd8b9f05ed0cf72c1cad1f77a973d18fbdecb9ec39c68bbea9bd9e187`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
