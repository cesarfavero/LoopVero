# `isValidMcpOAuthRedirectUri`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/integrations/README.en.md).

**Module:** `shared/mcp/mcp.ts` · [Module README](../../../../../modules/shared/mcp/mcp-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:226039-226051](../../../../../../reference/runtime/host-main.cjs#L226039-L226051) | `FunctionDeclaration` | no | `value` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:226039-226051](../../../../../../reference/runtime/host-main.cjs#L226039-L226051) | 9 | 0 | 0 | 10 | 0 | 0 |

### host:226039

Calls written directly in this body: `BLOCKED_MCP_OAUTH_REDIRECT_SCHEMES.has`, `URL.canParse`, `hasForbiddenMcpOAuthRedirectChar`, `isLoopbackHostname`, `new URL`.

SHA-256 of the source span: `5ead71d66f4de59a034a59e5682648abe249dca00266279d7f1216bc4af8311b`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
