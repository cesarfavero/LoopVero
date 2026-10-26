# `toUint8Array`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/architecture/README.en.md).

**Module:** `agent-kv/blob-store.js` · [Module README](../../../../modules/agent-kv/blob-store-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:284723-284728](../../../../../reference/runtime/sand-eval-runner.cjs#L284723-L284728) | `FunctionDeclaration` | no | `b2` |
| [state-worker:21729-21734](../../../../../reference/runtime/workers/state/agent-store-worker.cjs#L21729-L21734) | `FunctionDeclaration` | no | `b` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:284723-284728](../../../../../reference/runtime/sand-eval-runner.cjs#L284723-L284728) | 1 | 0 | 0 | 2 | 0 | 0 |
| [state-worker:21729-21734](../../../../../reference/runtime/workers/state/agent-store-worker.cjs#L21729-L21734) | 1 | 0 | 0 | 2 | 0 | 0 |

### evaluation:284723

Calls written directly in this body: `new Uint8Array`.

SHA-256 of the source span: `04da3613b2c56b05d1cbb51435e102266d56e2ca36d2d2cc1fb53ed34cc832de`.

### state-worker:21729

Calls written directly in this body: `new Uint8Array`.

SHA-256 of the source span: `cff1c3deec197f9265d333e4ab9beb63fa6ebd9dfac8c65957138f03df6cbf0e`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
