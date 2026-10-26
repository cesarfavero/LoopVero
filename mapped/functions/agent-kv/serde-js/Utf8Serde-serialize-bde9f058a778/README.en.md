# `Utf8Serde.serialize`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/architecture/README.en.md).

**Module:** `agent-kv/serde.js` · [Module README](../../../../modules/agent-kv/serde-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:615868-615870](../../../../../reference/runtime/host-main.cjs#L615868-L615870) | `method` | no | `value` |
| [evaluation:284653-284655](../../../../../reference/runtime/sand-eval-runner.cjs#L284653-L284655) | `method` | no | `value` |
| [state-worker:21672-21674](../../../../../reference/runtime/workers/state/agent-store-worker.cjs#L21672-L21674) | `method` | no | `value` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:615868-615870](../../../../../reference/runtime/host-main.cjs#L615868-L615870) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:284653-284655](../../../../../reference/runtime/sand-eval-runner.cjs#L284653-L284655) | 0 | 0 | 0 | 1 | 0 | 0 |
| [state-worker:21672-21674](../../../../../reference/runtime/workers/state/agent-store-worker.cjs#L21672-L21674) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:615868

Calls written directly in this body: `encoder.encode`.

SHA-256 of the source span: `92a0df27583f4f6596bc84f81503208b7510d5d1673939ae43016d8884abc656`.

### evaluation:284653

Calls written directly in this body: `encoder.encode`.

SHA-256 of the source span: `92a0df27583f4f6596bc84f81503208b7510d5d1673939ae43016d8884abc656`.

### state-worker:21672

Calls written directly in this body: `encoder.encode`.

SHA-256 of the source span: `92a0df27583f4f6596bc84f81503208b7510d5d1673939ae43016d8884abc656`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
