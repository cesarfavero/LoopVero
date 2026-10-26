# `createHostMcp/listInstalled`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/integrations/README.en.md).

**Module:** `core/mcp/host-mcp.ts` · [Module README](../../../../../modules/core/mcp/host-mcp-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:701197-701205](../../../../../../reference/runtime/host-main.cjs#L701197-L701205) | `FunctionExpression` | yes | `options2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:701197-701205](../../../../../../reference/runtime/host-main.cjs#L701197-L701205) | 0 | 0 | 1 | 1 | 0 | 0 |

### host:701197

Calls written directly in this body: `manager.listServers`, `toInstalledServers`.

SHA-256 of the source span: `a906244af96a5e2db38fbb48a08b360b368e1166838c05b568aefe073f8f0e32`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
