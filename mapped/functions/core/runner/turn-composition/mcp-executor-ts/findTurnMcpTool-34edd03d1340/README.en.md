# `findTurnMcpTool`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/integrations/README.en.md).

**Module:** `core/runner/turn-composition/mcp-executor.ts` · [Module README](../../../../../../modules/core/runner/turn-composition/mcp-executor-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:585887-585890](../../../../../../../reference/runtime/sand-eval-runner.cjs#L585887-L585890) | `FunctionDeclaration` | no | `mcp, host, lookup3` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:585887-585890](../../../../../../../reference/runtime/sand-eval-runner.cjs#L585887-L585890) | 1 | 0 | 0 | 1 | 0 | 0 |

### evaluation:585887

Calls written directly in this body: `host.mcpConfigJsonForTurn`, `mcp.findTool`.

SHA-256 of the source span: `009bf0428121ae921533f5a45a215d4cf2beb34e5a04d1f72642cb625417bd41`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
