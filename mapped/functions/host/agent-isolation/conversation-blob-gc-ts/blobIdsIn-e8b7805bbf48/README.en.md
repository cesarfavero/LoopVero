# `blobIdsIn`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `host/agent-isolation/conversation-blob-gc.ts` · [Module README](../../../../../modules/host/agent-isolation/conversation-blob-gc-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [state-worker:22202-22218](../../../../../../reference/runtime/workers/state/agent-store-worker.cjs#L22202-L22218) | `FunctionDeclaration` | no | `rawValue` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [state-worker:22202-22218](../../../../../../reference/runtime/workers/state/agent-store-worker.cjs#L22202-L22218) | 5 | 2 | 0 | 2 | 0 | 0 |

### state-worker:22202

Calls written directly in this body: `Array.isArray`, `Object.values`.

SHA-256 of the source span: `6f6f2d21679dbb65b4c969122d4772c17dd6fb27601d5e356d0d3b4cbe4357d7`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
