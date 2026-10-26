# `AgentWorkerConnection.send/<callback>/resolve`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/isolation/README.en.md).

**Module:** `host/agent-isolation/agent-worker-pool.ts` · [Module README](../../../../../modules/host/agent-isolation/agent-worker-pool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:715190-715193](../../../../../../reference/runtime/host-main.cjs#L715190-L715193) | `ArrowFunctionExpression` | no | `response` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:715190-715193](../../../../../../reference/runtime/host-main.cjs#L715190-L715193) | 0 | 0 | 0 | 0 | 0 | 0 |

### host:715190

Calls written directly in this body: `Date.now`, `resolve31`.

Assignment or increment targets: `this.lastActivityAt`.

SHA-256 of the source span: `adf2b717d225371eab0993c46659087957b8f7db8567d8af4c5edac2ff03ab12`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
