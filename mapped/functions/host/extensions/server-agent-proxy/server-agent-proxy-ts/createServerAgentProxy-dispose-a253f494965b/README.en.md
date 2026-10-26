# `createServerAgentProxy/dispose`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/server-agent-proxy/server-agent-proxy.ts` · [Module README](../../../../../../modules/host/extensions/server-agent-proxy/server-agent-proxy-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:714954-714963](../../../../../../../reference/runtime/host-main.cjs#L714954-L714963) | `ArrowFunctionExpression` | no | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:714954-714963](../../../../../../../reference/runtime/host-main.cjs#L714954-L714963) | 0 | 0 | 0 | 0 | 0 | 0 |

### host:714954

Calls written directly in this body: `cancelLinger`, `indexer.stop`, `reconcileWait.dispose`, `serverAgentActivity.stop`, `tail.stop`.

Assignment or increment targets: `disposed`, `reconcileWait`, `tailStarted`.

SHA-256 of the source span: `7a181ded6dede9782e6914609f5edb67027c875a59194f879f6983187cb875da`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
