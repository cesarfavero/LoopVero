# `invokesDesignatedDangerousMcpTool`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/integrations/README.en.md).

**Module:** `core/runner/tools/mcp-meta-tools.ts` · [Module README](../../../../../../modules/core/runner/tools/mcp-meta-tools-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:554163-554176](../../../../../../../reference/runtime/sand-eval-runner.cjs#L554163-L554176) | `FunctionDeclaration` | no | `rawArgs` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:554163-554176](../../../../../../../reference/runtime/sand-eval-runner.cjs#L554163-L554176) | 2 | 0 | 0 | 2 | 0 | 1 |

### evaluation:554163

Calls written directly in this body: `.replaceAll`, `.toLowerCase`, `DESIGNATED_DANGEROUS_MCP_TOOL_NAMES.has`, `JSON.parse`, `MCP_INVOCATION_TOOL_NAMES2.has`, `invoked.trim`, `invokedToolNameOf`.

Assignment or increment targets: `invoked`, `parsed`.

SHA-256 of the source span: `c51a1d805e7f82aba8149979e85f4f26d413ddf875faa912ba593d0760b46fb9`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
