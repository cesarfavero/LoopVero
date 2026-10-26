# `createTurnMcpExecutorEntries/describeScmError`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/integrations/README.en.md).

**Module:** `core/runner/turn-composition/mcp-executor.ts` · [Module README](../../../../../../modules/core/runner/turn-composition/mcp-executor-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:585996-586005](../../../../../../../reference/runtime/sand-eval-runner.cjs#L585996-L586005) | `ArrowFunctionExpression` | yes | `result, providerIdentifier, toolName` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:585996-586005](../../../../../../../reference/runtime/sand-eval-runner.cjs#L585996-L586005) | 4 | 0 | 0 | 5 | 0 | 0 |

### evaluation:585996

Calls written directly in this body: `.trim`, `describeScmToolError`, `host.mcpConfigJsonForTurn`, `scmToolErrorFromMcpResult`, `turnToolHost.gates.scmConnectCard`.

SHA-256 of the source span: `2671dc413f1dbf267d5f924095e6df13f12a005174373b2441f1bb3ec0caf54d`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
