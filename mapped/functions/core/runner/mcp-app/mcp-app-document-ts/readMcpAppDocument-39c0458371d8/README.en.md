# `readMcpAppDocument`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/integrations/README.en.md).

**Module:** `core/runner/mcp-app/mcp-app-document.ts` · [Module README](../../../../../../modules/core/runner/mcp-app/mcp-app-document-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:701357-701389](../../../../../../../reference/runtime/host-main.cjs#L701357-L701389) | `FunctionDeclaration` | yes | `mcp, args` |
| [evaluation:585329-585361](../../../../../../../reference/runtime/sand-eval-runner.cjs#L585329-L585361) | `FunctionDeclaration` | yes | `mcp, args` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:701357-701389](../../../../../../../reference/runtime/host-main.cjs#L701357-L701389) | 11 | 0 | 1 | 7 | 0 | 0 |
| [evaluation:585329-585361](../../../../../../../reference/runtime/sand-eval-runner.cjs#L585329-L585361) | 11 | 0 | 1 | 7 | 0 | 0 |

### host:701357

Calls written directly in this body: `.toString`, `Buffer.byteLength`, `Buffer.from`, `args.resourceUri.startsWith`, `isMcpAppMimeType`, `mcp.readResource`, `mcpAppDocumentOverCap`, `parseMcpAppResourceMeta`.

SHA-256 of the source span: `2bc8002fb0837341a29caccbecb3cd6c762365b15a9729765bddbfb788c41bc7`.

### evaluation:585329

Calls written directly in this body: `.toString`, `Buffer.byteLength`, `Buffer.from`, `args.resourceUri.startsWith`, `isMcpAppMimeType`, `mcp.readResource`, `mcpAppDocumentOverCap`, `parseMcpAppResourceMeta`.

SHA-256 of the source span: `2bc8002fb0837341a29caccbecb3cd6c762365b15a9729765bddbfb788c41bc7`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
