# `src/shared/node/mcp/mcp-marketplace.ts`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/integrations/README.en.md).

**Module:** `shared/node/mcp/mcp-marketplace.ts` · [Module README](../../../../../../modules/shared/node/mcp/mcp-marketplace-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:404750-404764](../../../../../../../reference/runtime/host-main.cjs#L404750-L404764) | `FunctionExpression` | no | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:404750-404764](../../../../../../../reference/runtime/host-main.cjs#L404750-L404764) | 0 | 0 | 0 | 0 | 0 | 0 |

### host:404750

Calls written directly in this body: `init_cursor_marketplace_client`, `init_cursor_marketplace_logo_registry`, `init_dist6`, `init_locale`, `init_mcp2`, `init_mcp_diagnostics`, `init_mcp_marketplace_logo`, `init_mcp_plugin_variables`, `init_proto`, `init_sand_text`.

Assignment or increment targets: `DEFAULT_TEAM_MARKETPLACE_NAME`.

SHA-256 of the source span: `33403ee7fcceca611f28d1deffa1e35a2a052b751ffe288bf069220ccd26ab4d`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
