# `createServerAgentProxy/performAction`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/server-agent-proxy/server-agent-proxy.ts` · [Module README](../../../../../../modules/host/extensions/server-agent-proxy/server-agent-proxy-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:714793-714804](../../../../../../../reference/runtime/host-main.cjs#L714793-L714804) | `ArrowFunctionExpression` | yes | `request5` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:714793-714804](../../../../../../../reference/runtime/host-main.cjs#L714793-L714804) | 1 | 0 | 1 | 1 | 0 | 0 |

### host:714793

Calls written directly in this body: `actionCore`, `ensureTailStarted`, `patchClientOverlay`.

SHA-256 of the source span: `2a961bdd223e8340edfb439988009324e80db53582db5eaeb718a40db1379feb`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
