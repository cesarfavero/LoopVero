# `createTurnRunShell/discoverTurnStartMcpTools`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/turn-run-shell.ts` · [Module README](../../../../../modules/core/runner/turn-run-shell-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:591376-591414](../../../../../../reference/runtime/sand-eval-runner.cjs#L591376-L591414) | `FunctionDeclaration` | yes | `ctx, mcpConfigJson` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:591376-591414](../../../../../../reference/runtime/sand-eval-runner.cjs#L591376-L591414) | 2 | 0 | 1 | 3 | 0 | 1 |

### evaluation:591376

Calls written directly in this body: `host.mcp`, `host.noteMcpToolDiscoveryFailed`, `host.setMcpConfigJsonForTurn`, `host.setMcpDiscoveryUnavailableForTurn`, `mcp.refreshAccountConfig`, `traceSendPhase`.

Assignment or increment targets: `tools`.

SHA-256 of the source span: `f7b724f9fe44ceee753acd531bdd5e5b5db11be94147c4a4c49be3f98651e36e`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
