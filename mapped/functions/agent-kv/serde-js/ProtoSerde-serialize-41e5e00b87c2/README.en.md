# `ProtoSerde.serialize`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/architecture/README.en.md).

**Module:** `agent-kv/serde.js` · [Module README](../../../../modules/agent-kv/serde-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:615883-615885](../../../../../reference/runtime/host-main.cjs#L615883-L615885) | `method` | no | `value` |
| [evaluation:284668-284670](../../../../../reference/runtime/sand-eval-runner.cjs#L284668-L284670) | `method` | no | `value` |
| [state-worker:21687-21689](../../../../../reference/runtime/workers/state/agent-store-worker.cjs#L21687-L21689) | `method` | no | `value` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:615883-615885](../../../../../reference/runtime/host-main.cjs#L615883-L615885) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:284668-284670](../../../../../reference/runtime/sand-eval-runner.cjs#L284668-L284670) | 0 | 0 | 0 | 1 | 0 | 0 |
| [state-worker:21687-21689](../../../../../reference/runtime/workers/state/agent-store-worker.cjs#L21687-L21689) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:615883

Calls written directly in this body: `value.toBinary`.

SHA-256 of the source span: `9b6b7523d61a66a568bec9cabd27b1ba1418c1c11095fa9b28e2509b441b845e`.

### evaluation:284668

Calls written directly in this body: `value.toBinary`.

SHA-256 of the source span: `9b6b7523d61a66a568bec9cabd27b1ba1418c1c11095fa9b28e2509b441b845e`.

### state-worker:21687

Calls written directly in this body: `value.toBinary`.

SHA-256 of the source span: `9b6b7523d61a66a568bec9cabd27b1ba1418c1c11095fa9b28e2509b441b845e`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
