# `mcpServerDisplayName`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/integrations/README.en.md).

**Module:** `shared/mcp/mcp-server-display-name.ts` · [Module README](../../../../../modules/shared/mcp/mcp-server-display-name-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:577245-577247](../../../../../../reference/runtime/sand-eval-runner.cjs#L577245-L577247) | `FunctionDeclaration` | no | `serverIdentifier` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:577245-577247](../../../../../../reference/runtime/sand-eval-runner.cjs#L577245-L577247) | 0 | 0 | 0 | 1 | 0 | 0 |

### evaluation:577245

Calls written directly in this body: `configuredServerName`, `humanizeServerName`.

SHA-256 of the source span: `80f3002780efde4db01a3310f29089d5485912ae99123b9420180ea7cc54b4fc`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
