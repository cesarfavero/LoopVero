# `SandMcpManager.readAccountServers`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/integrations/README.en.md).

**Module:** `shared/node/mcp/mcp-manager.ts` · [Module README](../../../../../../modules/shared/node/mcp/mcp-manager-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:689234-689250](../../../../../../../reference/runtime/host-main.cjs#L689234-L689250) | `method` | no | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:689234-689250](../../../../../../../reference/runtime/host-main.cjs#L689234-L689250) | 1 | 0 | 0 | 2 | 0 | 0 |

### host:689234

Calls written directly in this body: `.then`, `Promise.resolve`, `promise2.then`, `this.accountServersProvider`.

Assignment or increment targets: `this.accountServersGeneration`, `this.accountServersPromise`.

SHA-256 of the source span: `f9fae772b84f7e82f210eaf77b7ff2fec7c0fd85e17ba0dc86c7e60a4f6c8de0`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
