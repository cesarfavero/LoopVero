# `McpHostService.constructor/getAccessToken`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/integrations/README.en.md).

**Module:** `host/extensions/mcp/mcp-service.ts` · [Module README](../../../../../../modules/host/extensions/mcp/mcp-service-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:701520-701530](../../../../../../../reference/runtime/host-main.cjs#L701520-L701530) | `ArrowFunctionExpression` | yes | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:701520-701530](../../../../../../../reference/runtime/host-main.cjs#L701520-L701530) | 1 | 0 | 1 | 2 | 0 | 1 |

### host:701520

Calls written directly in this body: `deps.auth.getAccessToken`, `reportFallback`.

SHA-256 of the source span: `6dbdb3ad69fa083a1a70d35b5804998dc8ef5daf42a42a7bf5419ff5a2bd456e`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
