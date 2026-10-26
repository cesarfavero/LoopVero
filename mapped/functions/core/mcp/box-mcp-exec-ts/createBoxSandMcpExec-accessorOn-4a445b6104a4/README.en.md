# `createBoxSandMcpExec/accessorOn`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/integrations/README.en.md).

**Module:** `core/mcp/box-mcp-exec.ts` · [Module README](../../../../../modules/core/mcp/box-mcp-exec-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:684895-684903](../../../../../../reference/runtime/host-main.cjs#L684895-L684903) | `ArrowFunctionExpression` | yes | `host` |
| [evaluation:514683-514691](../../../../../../reference/runtime/sand-eval-runner.cjs#L514683-L514691) | `ArrowFunctionExpression` | yes | `host` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:684895-684903](../../../../../../reference/runtime/host-main.cjs#L684895-L684903) | 2 | 0 | 3 | 2 | 0 | 0 |
| [evaluation:514683-514691](../../../../../../reference/runtime/sand-eval-runner.cjs#L514683-L514691) | 2 | 0 | 3 | 2 | 0 | 0 |

### host:684895

Calls written directly in this body: `boxMcpResourceAccessor`, `host.loadMcpServers`, `host.mcpResourceAccessor`, `loadOptions`.

SHA-256 of the source span: `d41d0bc2e74b0bb154d7bd9ecc75e4a0e25186c1424ce1fffa423049227d9a7c`.

### evaluation:514683

Calls written directly in this body: `boxMcpResourceAccessor`, `host.loadMcpServers`, `host.mcpResourceAccessor`, `loadOptions`.

SHA-256 of the source span: `d41d0bc2e74b0bb154d7bd9ecc75e4a0e25186c1424ce1fffa423049227d9a7c`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
