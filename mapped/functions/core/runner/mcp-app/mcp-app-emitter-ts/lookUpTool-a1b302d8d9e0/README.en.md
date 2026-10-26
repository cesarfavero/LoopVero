# `lookUpTool`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/integrations/README.en.md).

**Module:** `core/runner/mcp-app/mcp-app-emitter.ts` · [Module README](../../../../../../modules/core/runner/mcp-app/mcp-app-emitter-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:585400-585405](../../../../../../../reference/runtime/sand-eval-runner.cjs#L585400-L585405) | `FunctionDeclaration` | yes | `mcp, args` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:585400-585405](../../../../../../../reference/runtime/sand-eval-runner.cjs#L585400-L585405) | 0 | 0 | 1 | 1 | 0 | 0 |

### evaluation:585400

Calls written directly in this body: `.then`, `mcp.findTool`.

SHA-256 of the source span: `fe21ad61a503e77832e6b6f533650a2e034cea67f309fd7596373d31a23d79b4`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
