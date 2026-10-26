# `snapshotMcpTurnStartDiscoveryWaits`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/integrations/README.en.md).

**Module:** `shared/node/mcp/mcp-discovery-progress.ts` · [Module README](../../../../../../modules/shared/node/mcp/mcp-discovery-progress-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:588935-588937](../../../../../../../reference/runtime/sand-eval-runner.cjs#L588935-L588937) | `FunctionDeclaration` | no | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:588935-588937](../../../../../../../reference/runtime/sand-eval-runner.cjs#L588935-L588937) | 0 | 0 | 0 | 1 | 0 | 0 |

### evaluation:588935

Calls written directly in this body: `.snapshot`, `progressStore.getStore`.

SHA-256 of the source span: `b1c25632b9c0ac6f90674fc7c3464d1041a5280c517890b98ef909abec7dfc22`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
