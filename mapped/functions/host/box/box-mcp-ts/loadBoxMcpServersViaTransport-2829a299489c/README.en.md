# `loadBoxMcpServersViaTransport`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/integrations/README.en.md).

**Module:** `host/box/box-mcp.ts` · [Module README](../../../../../modules/host/box/box-mcp-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:591155-591175](../../../../../../reference/runtime/host-main.cjs#L591155-L591175) | `FunctionDeclaration` | yes | `ctx, transport, configJson` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:591155-591175](../../../../../../reference/runtime/host-main.cjs#L591155-L591175) | 1 | 0 | 1 | 1 | 2 | 1 |

### host:591155

Calls written directly in this body: `control.loadMcpServers`, `createContextPropagatingClient`, `new LoadMcpServersRequest`, `new SandBoxMcpUnsupportedError`.

Explicit throw targets: `SandBoxMcpUnsupportedError`, `error64`.

SHA-256 of the source span: `28de3b4ec73c29928ca8a1200957b981fdb004fb4929376741b12ec5175f2858`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
