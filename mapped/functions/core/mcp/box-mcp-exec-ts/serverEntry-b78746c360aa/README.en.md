# `serverEntry`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/integrations/README.en.md).

**Module:** `core/mcp/box-mcp-exec.ts` · [Module README](../../../../../modules/core/mcp/box-mcp-exec-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:684858-684867](../../../../../../reference/runtime/host-main.cjs#L684858-L684867) | `FunctionDeclaration` | no | `configJson, serverIdentifier` |
| [evaluation:514646-514655](../../../../../../reference/runtime/sand-eval-runner.cjs#L514646-L514655) | `FunctionDeclaration` | no | `configJson, serverIdentifier` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:684858-684867](../../../../../../reference/runtime/host-main.cjs#L684858-L684867) | 3 | 0 | 0 | 3 | 0 | 0 |
| [evaluation:514646-514655](../../../../../../reference/runtime/sand-eval-runner.cjs#L514646-L514655) | 3 | 0 | 0 | 3 | 0 | 0 |

### host:684858

Calls written directly in this body: `.find`, `JSON.parse`, `Object.entries`.

SHA-256 of the source span: `364686a2a9b9ab06e34f76070822664adde8dfd48b0e9ee68e68591eff2875c5`.

### evaluation:514646

Calls written directly in this body: `.find`, `JSON.parse`, `Object.entries`.

SHA-256 of the source span: `470878ad8b31f0070515654b37966fda85cf0fa48537d6a43553312ebcabd4e7`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
