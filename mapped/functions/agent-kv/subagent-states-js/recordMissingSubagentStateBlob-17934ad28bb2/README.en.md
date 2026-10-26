# `recordMissingSubagentStateBlob`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/components/subagents/README.en.md).

**Module:** `agent-kv/subagent-states.js` · [Module README](../../../../modules/agent-kv/subagent-states-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:615965-615971](../../../../../reference/runtime/host-main.cjs#L615965-L615971) | `FunctionDeclaration` | no | `ctx, miss` |
| [evaluation:284778-284784](../../../../../reference/runtime/sand-eval-runner.cjs#L284778-L284784) | `FunctionDeclaration` | no | `ctx, miss` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:615965-615971](../../../../../reference/runtime/host-main.cjs#L615965-L615971) | 0 | 0 | 0 | 0 | 0 | 0 |
| [evaluation:284778-284784](../../../../../reference/runtime/sand-eval-runner.cjs#L284778-L284784) | 0 | 0 | 0 | 0 | 0 | 0 |

### host:615965

Calls written directly in this body: `logger27.warn`, `subagentStateRefMissingBlob.increment`.

SHA-256 of the source span: `133151f2d33f604f3c83f0f0c6aabbe3589ca6eb5bd52c3d379b170dbd855372`.

### evaluation:284778

Calls written directly in this body: `logger2.warn`, `subagentStateRefMissingBlob.increment`.

SHA-256 of the source span: `39c0ee9339d9a77fcdc9f0cd8fca89a60b6ca3bc1e2e6657129b846335e49aa6`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
