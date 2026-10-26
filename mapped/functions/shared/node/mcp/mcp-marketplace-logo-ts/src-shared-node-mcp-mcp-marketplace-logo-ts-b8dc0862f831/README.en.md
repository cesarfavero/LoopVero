# `src/shared/node/mcp/mcp-marketplace-logo.ts`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/integrations/README.en.md).

**Module:** `shared/node/mcp/mcp-marketplace-logo.ts` · [Module README](../../../../../../modules/shared/node/mcp/mcp-marketplace-logo-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:404528-404544](../../../../../../../reference/runtime/host-main.cjs#L404528-L404544) | `FunctionExpression` | no | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:404528-404544](../../../../../../../reference/runtime/host-main.cjs#L404528-L404544) | 0 | 0 | 0 | 0 | 0 | 0 |

### host:404528

Calls written directly in this body: `createDeadlinePolicy`, `init_cursor_marketplace_client`, `init_cursor_marketplace_logo_registry`, `init_http_image`, `init_scheduling`, `new Map`.

Assignment or increment targets: `LOGO_CACHE_MAX_AGE_MS`, `LOGO_FETCH_CONCURRENCY`, `LOGO_MAX_BYTES`, `MARKETPLACE_FETCH_DEADLINE`, `activeLogoFetches`, `logoCache`, `pendingLogoFetches`.

SHA-256 of the source span: `2c5be4065afbf96f1ddf9580354864b6233611ef55583ea796886606c8140c66`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
