# `appCallableTool`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/integrations/README.en.md).

**Module:** `host/extensions/mcp/mcp-app-runtime.ts` · [Module README](../../../../../../modules/host/extensions/mcp/mcp-app-runtime-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:701439-701447](../../../../../../../reference/runtime/host-main.cjs#L701439-L701447) | `FunctionDeclaration` | no | `tool, args` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:701439-701447](../../../../../../../reference/runtime/host-main.cjs#L701439-L701447) | 4 | 0 | 0 | 5 | 0 | 0 |

### host:701439

Calls written directly in this body: `isDeclaredReadOnlyMcpTool`, `isVisibleToApps`.

SHA-256 of the source span: `223b5ddefe9670532e721e280b938b44ebabdd9adf8b7dc02d4106b4ab17b0f7`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
