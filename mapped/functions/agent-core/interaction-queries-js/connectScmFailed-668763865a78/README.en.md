# `connectScmFailed`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/architecture/README.en.md).

**Module:** `agent-core/interaction-queries.js` · [Module README](../../../../modules/agent-core/interaction-queries-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:475775-475790](../../../../../reference/runtime/host-main.cjs#L475775-L475790) | `FunctionExpression` | no | `queryId, error64` |
| [evaluation:254999-255014](../../../../../reference/runtime/sand-eval-runner.cjs#L254999-L255014) | `FunctionExpression` | no | `queryId, error63` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:475775-475790](../../../../../reference/runtime/host-main.cjs#L475775-L475790) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:254999-255014](../../../../../reference/runtime/sand-eval-runner.cjs#L254999-L255014) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:475775

Calls written directly in this body: `new ConnectScmRequestResponse`, `new ConnectScmRequestResponse_Failed`, `new InteractionResponse`.

SHA-256 of the source span: `827a1730846677011d17fa22ed666e92bc4385b5f96387627a8aa67e7b38b665`.

### evaluation:254999

Calls written directly in this body: `new ConnectScmRequestResponse`, `new ConnectScmRequestResponse_Failed`, `new InteractionResponse`.

SHA-256 of the source span: `7e4c9a069e6dd0622e0c7f056012924d9592e86de56d02d509d9220aeb8fdac4`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
