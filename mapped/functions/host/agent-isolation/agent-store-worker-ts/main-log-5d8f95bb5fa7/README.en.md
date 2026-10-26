# `main/log`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/isolation/README.en.md).

**Module:** `host/agent-isolation/agent-store-worker.ts` · [Module README](../../../../../modules/host/agent-isolation/agent-store-worker-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [state-worker:22672-22673](../../../../../../reference/runtime/workers/state/agent-store-worker.cjs#L22672-L22673) | `ArrowFunctionExpression` | no | `message` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [state-worker:22672-22673](../../../../../../reference/runtime/workers/state/agent-store-worker.cjs#L22672-L22673) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at state-worker:22672 uses an implicit arrow-function return.

### state-worker:22672

Calls written directly in this body: `process.stderr.write`.

SHA-256 of the source span: `89d971c4abc8ebac301ae7a3d09b2d4655a6876b7f5fc59bbde1782aa7c0d093`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
