# `isReadForToolPermissions`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/integrations/README.en.md).

**Module:** `shared/mcp/mcp-tool-read-access.ts` · [Module README](../../../../../modules/shared/mcp/mcp-tool-read-access-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:686993-686998](../../../../../../reference/runtime/host-main.cjs#L686993-L686998) | `FunctionDeclaration` | no | `args` |
| [evaluation:579128-579133](../../../../../../reference/runtime/sand-eval-runner.cjs#L579128-L579133) | `FunctionDeclaration` | no | `args` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:686993-686998](../../../../../../reference/runtime/host-main.cjs#L686993-L686998) | 1 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:579128-579133](../../../../../../reference/runtime/sand-eval-runner.cjs#L579128-L579133) | 1 | 0 | 0 | 2 | 0 | 0 |

### host:686993

Calls written directly in this body: `CURSOR_HOSTED_MCP_HOSTS.has`, `args.lookupVerb`, `mcpServerHostname`.

SHA-256 of the source span: `22c314ef83552581f58a839c8cb3a5e23c27964a0181c997c8ff85e775beac36`.

### evaluation:579128

Calls written directly in this body: `CURSOR_HOSTED_MCP_HOSTS.has`, `args.lookupVerb`, `mcpServerHostname`.

SHA-256 of the source span: `22c314ef83552581f58a839c8cb3a5e23c27964a0181c997c8ff85e775beac36`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
