# `configWithoutServer`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/integrations/README.en.md).

**Module:** `core/mcp/box-mcp-exec.ts` · [Module README](../../../../../modules/core/mcp/box-mcp-exec-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:684846-684857](../../../../../../reference/runtime/host-main.cjs#L684846-L684857) | `FunctionDeclaration` | no | `configJson, serverIdentifier` |
| [evaluation:514634-514645](../../../../../../reference/runtime/sand-eval-runner.cjs#L514634-L514645) | `FunctionDeclaration` | no | `configJson, serverIdentifier` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:684846-684857](../../../../../../reference/runtime/host-main.cjs#L684846-L684857) | 2 | 0 | 0 | 3 | 0 | 0 |
| [evaluation:514634-514645](../../../../../../reference/runtime/sand-eval-runner.cjs#L514634-L514645) | 2 | 0 | 0 | 3 | 0 | 0 |

### host:684846

Calls written directly in this body: `.filter`, `JSON.parse`, `JSON.stringify`, `Object.entries`, `Object.fromEntries`.

SHA-256 of the source span: `ee2556ad3eb70d70575028fadb17dac17d29e38a524334c48c648b4f7573ca4c`.

### evaluation:514634

Calls written directly in this body: `.filter`, `JSON.parse`, `JSON.stringify`, `Object.entries`, `Object.fromEntries`.

SHA-256 of the source span: `b833455216b18910ee04659a7de36c03cd7d5948610047ecc1042d2541cdc5e3`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
