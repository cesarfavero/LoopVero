# `createTurnMcpAppEmitter`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/integrations/README.en.md).

**Module:** `core/runner/turn-composition/mcp-executor.ts` · [Module README](../../../../../../modules/core/runner/turn-composition/mcp-executor-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:585891-585906](../../../../../../../reference/runtime/sand-eval-runner.cjs#L585891-L585906) | `FunctionDeclaration` | no | `host, turnToolHost, updateObservers` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:585891-585906](../../../../../../../reference/runtime/sand-eval-runner.cjs#L585891-L585906) | 2 | 0 | 0 | 1 | 0 | 0 |

### evaluation:585891

Calls written directly in this body: `createMcpAppEmitter`, `createMcpAppServerCheck`, `host.mcpAppPages`, `turnToolHost.gates.mcpApps`.

SHA-256 of the source span: `d085ddfa3455d04e618074daa1cc7cf8bf607d26bbb9fee4a3392795a40cab59`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
