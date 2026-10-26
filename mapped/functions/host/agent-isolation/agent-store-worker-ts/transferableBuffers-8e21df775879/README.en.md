# `transferableBuffers`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/isolation/README.en.md).

**Module:** `host/agent-isolation/agent-store-worker.ts` · [Module README](../../../../../modules/host/agent-isolation/agent-store-worker-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [state-worker:22654-22660](../../../../../../reference/runtime/workers/state/agent-store-worker.cjs#L22654-L22660) | `FunctionDeclaration` | no | `views` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [state-worker:22654-22660](../../../../../../reference/runtime/workers/state/agent-store-worker.cjs#L22654-L22660) | 1 | 1 | 0 | 1 | 0 | 0 |

### state-worker:22654

Calls written directly in this body: `buffers.push`.

SHA-256 of the source span: `3b6fb11c213e72a7f1a00e0d5c909e7b67cba52894adf076c3771dc421ebc29e`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
