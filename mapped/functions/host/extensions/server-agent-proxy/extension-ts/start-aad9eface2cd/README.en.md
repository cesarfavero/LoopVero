# `start`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/server-agent-proxy/extension.ts` · [Module README](../../../../../../modules/host/extensions/server-agent-proxy/extension-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:714977-715007](../../../../../../../reference/runtime/host-main.cjs#L714977-L715007) | `ArrowFunctionExpression` | no | `context2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:714977-715007](../../../../../../../reference/runtime/host-main.cjs#L714977-L715007) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:714977

Calls written directly in this body: `context2.onStop`, `createServerAgentProxy`, `proxy.bindRunStateChanged`, `transcript.setServerActivityOverlayProvider`, `transcript.subscribeAgentUpserted`, `transcript.subscribeAgents`.

SHA-256 of the source span: `07d7e816a27c00a1df94f3759bc58cd32951767767b50aaa671de258faaeb7e5`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
