# `src/shared/mcp/mcp.ts`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/integrations/README.en.md).

**Module:** `shared/mcp/mcp.ts` · [Module README](../../../../../modules/shared/mcp/mcp-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:226089-226136](../../../../../../reference/runtime/host-main.cjs#L226089-L226136) | `FunctionExpression` | no | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:226089-226136](../../../../../../reference/runtime/host-main.cjs#L226089-L226136) | 0 | 0 | 0 | 0 | 0 | 0 |

### host:226089

Calls written directly in this body: `init_key_of`, `init_loopback_host`, `new Set`.

Assignment or increment targets: `BACKEND_MCP_OAUTH_PENDING_STATE_TTL_MS`, `BLOCKED_MCP_OAUTH_REDIRECT_SCHEMES`, `DANGEROUS_MCP_TOOL_EXECUTE_TIMEOUT_MS`, `DEFAULT_MCP_ACCOUNT_KEY`, `DESIGNATED_DANGEROUS_MCP_TOOL_NAMES`, `GROK_SHAREPOINT_SERVER_IDENTIFIER`, `GROK_SHAREPOINT_WRITE_DISPLAY_SERVER_ID`, `GROK_SHAREPOINT_WRITE_SERVER_IDENTIFIER`, `MAX_CONNECTOR_ERROR_LENGTH`, `MAX_MCP_OAUTH_REDIRECT_URI_LENGTH`, `MAX_RENDERED_MCP_ACCOUNT_LABEL_LENGTH`, `MAX_UNTRUSTED_MARKUP_SCAN_LENGTH`, `MCP_BACKEND_LISTING_REUSE_MS`, `MCP_LABEL_HOSTILE_CHARS`, `MCP_LISTING_SERVER_ID_PATTERN`, `MCP_OAUTH_AUTHORIZATION_URL_LIFETIME_MS`, `MCP_RAW_SERVER_STATUSES`.

SHA-256 of the source span: `9f33ed4fbe2bb3f13202d37020aa069089003b313da9c7342d6210e4c1c3563d`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
