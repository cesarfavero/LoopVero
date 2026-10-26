# `readonlyCallMcpToolOptions`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/integrations/README.en.md).

**Module:** `core/runner/tools/turn-builders/mcp-tools.ts` · [Module README](../../../../../../../modules/core/runner/tools/turn-builders/mcp-tools-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:580960-580966](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L580960-L580966) | `FunctionDeclaration` | no | `mcpTools` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:580960-580966](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L580960-L580966) | 0 | 0 | 0 | 1 | 0 | 0 |

### evaluation:580960

Calls written directly in this body: `createSandMcpMetaToolOptions`, `readonlyMcpToolIsBlocked`.

SHA-256 of the source span: `db0fd01e6881bb1a967752fce8e9a24f6f4a73e4f994172264241dc4a7973bf2`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).
