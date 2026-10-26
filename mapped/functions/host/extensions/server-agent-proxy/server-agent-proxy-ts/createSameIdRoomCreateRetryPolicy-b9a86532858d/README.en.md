# `createSameIdRoomCreateRetryPolicy`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/server-agent-proxy/server-agent-proxy.ts` · [Module README](../../../../../../modules/host/extensions/server-agent-proxy/server-agent-proxy-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:714568-714577](../../../../../../../reference/runtime/host-main.cjs#L714568-L714577) | `FunctionDeclaration` | no | `clock` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:714568-714577](../../../../../../../reference/runtime/host-main.cjs#L714568-L714577) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:714568

Calls written directly in this body: `createRetryPolicy`.

SHA-256 of the source span: `8913088fe53c911f36269189bfabbfd2e9970673b3899ab044577176eb90a28d`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
